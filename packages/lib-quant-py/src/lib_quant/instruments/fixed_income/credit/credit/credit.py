import datetime
from collections import defaultdict
from typing import Callable, Generic, TypeVar

import QuantLib as ql
from lib_shared.core.utils.field.field import Field
from lib_shared.core.utils.private_field.private_field import PrivateField

from lib_quant.cashflow.cashflow_event.cashflow_event import CashflowEvent
from lib_quant.cashflow.cashflow_schedule.cashflow_schedule import CashflowSchedule
from lib_quant.cashflow.utils.schedule.schedule import Schedule
from lib_quant.curve.bootstrappable_curve.bootstrappable_curve import (
    BootstrappableCurve,
)
from lib_quant.datetime.constants import Direction, Frequency
from lib_quant.datetime.utils.period.period import Period
from lib_quant.derivs.option.option import Option
from lib_quant.instruments.fixed_income.credit.credit.constants import AmortizationType
from lib_quant.instruments.fixed_income.fixed_income.fixed_income import FixedIncome

TType = TypeVar("TType", bound=ql.Bond)


class Credit(
    FixedIncome,
    Generic[TType],
):
    amortization_type: AmortizationType | None = Field(default=None)
    amortization_period: Period | None = Field(default=None)
    amortization_reset_period: Period | None = Field(default=None)
    io_period: Period | None = Field(default=None)
    options: list[Option] = Field(default_factory=list)
    curve: BootstrappableCurve | None = Field(default=None)
    pik_period: Period | None = Field(default=None)
    pik_rate: float = Field(default=1.0)

    prepayment_rate: (
        float | list[float] | Callable[[int, datetime.date, float], float] | None
    ) = Field(default=None)
    default_rate: (
        float | list[float] | Callable[[int, datetime.date, float], float] | None
    ) = Field(default=None)
    severity: (
        float | list[float] | Callable[[int, datetime.date, float], float] | None
    ) = Field(default=None)
    recovery_lag_period: Period | None = Field(default=None)

    _security: TType = PrivateField()
    _day_count: "ql.DayCounter | None" = PrivateField()
    _schedule: Schedule = PrivateField()
    _cashflows: CashflowSchedule = PrivateField()

    def post_init(self) -> None:
        super().post_init()
        if self.issue_date is None:
            raise ValueError("missing issue_date")
        if self.maturity_date is None:
            raise ValueError("missing maturity_date")

        self.frequency = Frequency(self.frequency)
        self._schedule = Schedule(
            start_date=self.issue_date,
            end_date=self.maturity_date,
            step=self.frequency.unit_period,
            direction=Direction.BACKWARD,
            calendar=self.calendar,
        )
        self._day_count = self.calendar.day_count.ql_schedule(self._schedule)
        self._cashflows = self._build_cashflows()

    def set_curve(
        self,
        curve: BootstrappableCurve,
    ) -> None:
        self._security.setPricingEngine(ql.DiscountingBondEngine(curve.curve))

    def accrued_interest(
        self,
        settlement_date: datetime.date | None = None,
    ) -> float:
        settlement_date = settlement_date or self.calendar.as_of_date
        return self._security.accruedAmount(
            ql.Date(
                settlement_date.day,
                settlement_date.month,
                settlement_date.year,
            ),
        )

    def yield_from_price(
        self,
        value: float,
    ) -> float:
        return self.ql.bondYield(
            ql.BondPrice(value, ql.BondPrice.Clean),
            self._day_count,
            ql.Compounded,
            self.frequency.ql,
        )

    def price_from_yield(
        self,
        value: float,
    ) -> float:
        return self.ql.cleanPrice(
            value,
            self._day_count,
            ql.Compounded,
            self.frequency.ql,
        )

    def price_from_zspread(
        self,
        value: float,
        curve: BootstrappableCurve,
    ) -> float:
        return ql.BondFunctions.cleanPrice(
            self.ql,
            curve.curve,
            value,
            self._day_count,
            ql.Compounded,
            self.frequency.ql,
        )

    def zspread_from_price(
        self,
        value: float,
        curve: BootstrappableCurve,
    ) -> float:
        return ql.BondFunctions.zSpread(
            self.ql,
            ql.BondPrice(value, ql.BondPrice.Clean),
            curve.curve,
            self._day_count,
            ql.Compounded,
            self.frequency.ql,
        )

    def duration_from_yield(
        self,
        value: float,
        is_modified: bool = True,
    ) -> float:
        return ql.BondFunctions.duration(
            self.ql,
            value,
            self._day_count,
            ql.Compounded,
            self.frequency.ql,
            ql.Duration.Modified if is_modified else ql.Duration.Macaulay,
        )

    def convexity_from_yield(
        self,
        value: float,
    ) -> float:
        return ql.BondFunctions.convexity(
            self.ql,
            value,
            self._day_count,
            ql.Compounded,
            self.frequency.ql,
        )

    def dv01_from_yield(
        self,
        value: float,
    ) -> float:
        return abs(
            ql.BondFunctions.basisPointValue(
                self.ql,
                value,
                self._day_count,
                ql.Compounded,
                self.frequency.ql,
            )
        )

    @staticmethod
    def _level_payment(
        balance: float,
        rates: list[float],
        times: list[float],
        start: int,
        end: int,
    ) -> float:
        denominator_sum = 0.0
        cumulative = 1.0
        for i in range(start, end):
            cumulative *= 1.0 + rates[i] * times[i]
            denominator_sum += 1.0 / cumulative
        return balance / denominator_sum if denominator_sum > 0 else 0.0

    @staticmethod
    def _periodic_rate(
        rate_annual: float | None,
        year_fraction: float,
    ) -> float:
        if not rate_annual:
            return 0.0
        return 1.0 - (1.0 - rate_annual) ** year_fraction

    @staticmethod
    def _rate_from_curve(
        curve: float
        | list[float]
        | Callable[[int, datetime.date, float], float]
        | None,
        period_index: int,
        date: datetime.date,
        balance: float,
    ) -> float:
        if curve is None:
            return 0.0
        if callable(curve):
            return curve(period_index, date, balance)
        elif isinstance(curve, list):
            idx = min(period_index, len(curve) - 1)
            return curve[idx]
        else:
            return curve

    def _amount_from_curve(
        self,
        curve: float
        | list[float]
        | Callable[[int, datetime.date, float], float]
        | None,
        period_index: int,
        date: datetime.date,
        balance: float,
        time: float,
    ) -> float:
        rate = self._rate_from_curve(
            curve,
            period_index,
            date,
            balance,
        )
        return balance * self._periodic_rate(rate, time)

    def n_periods(
        self,
        period: Period | None,
    ) -> int:
        if period is None:
            return 0
        return period // self.frequency.unit_period

    def _build_cashflows(self) -> CashflowSchedule:
        if self.maturity_date is None:
            raise ValueError("maturity_date missing")

        dates = self._schedule.dates
        n_periods = len(dates) - 1

        if self.amortization_period is not None:
            amort_end_date = self.calendar.advance(
                self.amortization_period,
                self.issue_date,
            )
            amort_dates = Schedule(
                start_date=self.issue_date,
                end_date=amort_end_date,
                step=self.frequency.unit_period,
                calendar=self.calendar,
                direction=Direction.BACKWARD,
            ).dates
        else:
            amort_dates = dates

        n_amort_periods = len(amort_dates) - 1
        if n_amort_periods < n_periods:
            raise ValueError(
                "amortization_period must be >= loan term "
                f"({n_amort_periods} < {n_periods})"
            )

        rates = [
            self.rate.all_in_rate(d) if self.rate is not None else 0.0
            for d in amort_dates
        ]
        times = [
            self.calendar.year_fraction(amort_dates[i + 1], amort_dates[i])
            for i in range(n_amort_periods)
        ]

        n_pik_periods = self.n_periods(self.pik_period)
        n_io_periods = 0
        n_reset_periods = None

        if self.amortization_type == AmortizationType.LEVEL_PAY:
            n_io_periods = self.n_periods(self.io_period)
            if self.amortization_reset_period is not None:
                n_reset_periods = self.n_periods(self.amortization_reset_period)
                if n_reset_periods < 1:
                    raise ValueError("reset_frequency must be >= payment frequency")

        straight_line_balance = self.size
        straight_line_step = 0.0
        if self.amortization_type == AmortizationType.STRAIGHT_LINE:
            for i in range(n_pik_periods):
                straight_line_balance += (
                    straight_line_balance * rates[i] * times[i] * self.pik_rate
                )
            if n_periods > n_pik_periods:
                straight_line_step = straight_line_balance / (n_periods - n_pik_periods)

        recovery_lag_periods = self.n_periods(self.recovery_lag_period)
        recovery_pending: dict[int, float] = defaultdict(float)
        events: list[CashflowEvent] = []
        balance_actual = balance_scheduled = self.size
        pmt = None

        for i in range(n_periods):
            rate, time = rates[i], times[i]

            balance_scheduled_start = balance_scheduled
            is_pik = i < n_pik_periods
            if is_pik:
                balance_scheduled_end = balance_scheduled_start * (
                    1 + rate * time * self.pik_rate
                )
                continue

            k = i - n_pik_periods
            match self.amortization_type:
                case AmortizationType.STRAIGHT_LINE:
                    balance_scheduled_end = (
                        straight_line_balance - (k + 1) * straight_line_step
                    )
                case AmortizationType.LEVEL_PAY:
                    if k < n_io_periods:
                        balance_scheduled_end = balance_scheduled_start
                    else:
                        amort_idx = k - n_io_periods
                        is_reset = (
                            n_reset_periods is not None
                            and amort_idx % n_reset_periods == 0
                        )
                        if pmt is None or is_reset:
                            pmt = self._level_payment(
                                balance_scheduled_start,
                                rates,
                                times,
                                i,
                                n_amort_periods,
                            )
                        interest = balance_scheduled_start * rate * time
                        balance_scheduled_end = max(
                            0.0,
                            balance_scheduled_start - (pmt - interest),
                        )
                case _:
                    balance_scheduled_end = balance_scheduled_start

            if i == n_periods - 1:
                balance_scheduled_end = 0.0

            balance_scheduled = balance_scheduled_end
            balanace_start = balance_actual
            interest_scheduled = balanace_start * rate * time
            pik_capitalized = interest_scheduled * self.pik_rate if is_pik else 0.0
            balance = balanace_start + pik_capitalized

            paydown = max(0.0, balance_scheduled_start - balance_scheduled_end)
            paydown_rate = (
                paydown / balance_scheduled_start
                if balance_scheduled_start > 0
                else 0.0
            )
            principal_scheduled = min(balance, balance * paydown_rate)

            balanace_remaining = balance - principal_scheduled

            prepayment = self._amount_from_curve(
                self.prepayment_rate,
                i,
                dates[i + 1],
                balanace_remaining,
                time,
            )
            balanace_remaining -= prepayment

            defaulted = self._amount_from_curve(
                self.default_rate,
                i,
                dates[i + 1],
                balanace_remaining,
                time,
            )

            severity = self._rate_from_curve(
                self.severity,
                i,
                dates[i + 1],
                defaulted,
            )
            loss = defaulted * severity
            recovery = defaulted * (1.0 - severity)

            balance_end = max(0.0, balanace_remaining - defaulted)

            recovery_period = recovery_pending.pop(i, 0.0)
            if recovery_lag_periods > 0 and recovery:
                recovery_pending[i + recovery_lag_periods] += recovery
            else:
                recovery_period += recovery

            d = dates[i + 1]
            events.append(
                CashflowEvent(
                    date=d,
                    balance_start=balanace_start,
                    balance_end=balance_end,
                    interest_scheduled=interest_scheduled,
                    interest_paid=interest_scheduled - pik_capitalized,
                    pik_capitalized=pik_capitalized,
                    principal_scheduled=principal_scheduled,
                    prepayment=prepayment,
                    defaulted=defaulted,
                    loss=loss,
                    recovery=recovery_period,
                )
            )
            balance_actual = balance_end

        if recovery_pending:
            last_date = dates[-1]
            for _, amount in sorted(recovery_pending.items()):
                if amount <= 0.0:
                    continue
                recovery_date = (
                    self.calendar.advance(self.recovery_lag_period, last_date)
                    if self.recovery_lag_period is not None
                    else last_date
                )
                events.append(
                    CashflowEvent(
                        date=recovery_date,
                        recovery=amount,
                    )
                )

        return CashflowSchedule(events=events)

    def cashflows(self) -> CashflowSchedule:
        return self._cashflows

    @property
    def notionals(self) -> list[float]:
        n_periods = len(self._schedule.dates) - 1
        return [e.balance_start or 0.0 for e in self._cashflows.events[:n_periods]]

    @property
    def ql(self) -> TType:
        return self._security
