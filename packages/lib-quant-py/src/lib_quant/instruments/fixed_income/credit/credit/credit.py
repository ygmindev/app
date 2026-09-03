import datetime
from collections import defaultdict
from typing import Generic, TypeVar

import numpy as np
import QuantLib as ql
from lib_shared.core.utils.field.field import Field
from lib_shared.core.utils.private_field.private_field import PrivateField

from lib_quant.cashflow.cashflow.cashflow import Cashflow
from lib_quant.cashflow.cashflow_event.cashflow_event import CashflowEvent
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

    _security: TType = PrivateField()
    _day_count: "ql.DayCounter | None" = PrivateField()
    _schedule: Schedule = PrivateField()

    def post_init(self) -> None:
        super().post_init()
        if self.issue_date is None:
            raise ValueError("missing issue_date")
        if self.maturity_date is None:
            raise ValueError("missing maturity_date")

        self._schedule = Schedule(
            start_date=self.issue_date,
            end_date=self.maturity_date,
            step=self.frequency.unit_period,
            direction=Direction.BACKWARD,
            calendar=self.calendar,
        )
        self._day_count = self.calendar.day_count.ql_schedule(self._schedule)

    def set_curve(
        self,
        curve: BootstrappableCurve,
    ) -> None:
        self._security.setPricingEngine(ql.DiscountingBondEngine(curve.curve))

    def yield_from_price(
        self,
        value: float,
    ) -> float:
        return self.ql.bondYield(
            value,
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

    def cashflows(self) -> Cashflow:
        by_date = defaultdict(
            lambda: {
                "interest": 0.0,
                "principal": 0.0,
                "nominal": None,
            }
        )

        security = self.ql

        for cf in security.cashflows():
            d = cf.date()
            coupon = ql.as_floating_rate_coupon(cf)
            if coupon is None:
                coupon = ql.as_coupon(cf)
            if coupon is not None:
                by_date[d]["interest"] += coupon.amount()
                by_date[d]["nominal"] = coupon.nominal()
            else:
                by_date[d]["principal"] += cf.amount()

        notionals = security.notionals()
        events: list[CashflowEvent] = []
        running_balance = notionals[0] if notionals else self.size

        for d in sorted(by_date.keys()):
            row = by_date[d]
            balance_start = (
                row["nominal"] if row["nominal"] is not None else running_balance
            )
            balance_end = balance_start - row["principal"]
            events.append(
                CashflowEvent(
                    date=datetime.date(d.year(), d.month(), d.dayOfMonth()),
                    balance_start=balance_start,
                    balance_end=balance_end,
                    principal=row["principal"],
                    interest=row["interest"],
                )
            )
            running_balance = balance_end

        return Cashflow(events=events)

    @property
    def notionals(self) -> list[float]:
        if self.maturity_date is None:
            raise ValueError("maturity_date missing")

        dates = Schedule(
            start_date=self.issue_date,
            end_date=self.maturity_date,
            step=Frequency(self.frequency).unit_period,
            calendar=self.calendar,
        ).dates
        n_periods = len(dates) - 1

        match self.amortization_type:
            case AmortizationType.STRAIGHT_LINE:
                step = self.size / n_periods
                return np.linspace(self.size, step, n_periods).tolist()
            case AmortizationType.LEVEL_PAY:
                if self.io_period is None:
                    n_io_periods = 0
                else:
                    n_io_periods = self.io_period // self.frequency.unit_period

                if self.pik_period is None:
                    n_pik_periods = 0
                else:
                    n_pik_periods = self.pik_period // self.frequency.unit_period

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
                    self.calendar.year_fraction(amort_dates[i], amort_dates[i + 1])
                    for i in range(n_amort_periods)
                ]
                if self.amortization_reset_period is not None:
                    n_reset_periods = (
                        self.amortization_reset_period // self.frequency.unit_period
                    )
                    if n_reset_periods < 1:
                        raise ValueError("reset_frequency must be >= payment frequency")
                else:
                    n_reset_periods = None

                balance = self.size
                pmt = None
                notionals = []

                for idx, i in enumerate(range(n_periods)):
                    if i < n_pik_periods:
                        accrued = balance * rates[i] * times[i]
                        balance = balance + accrued * self.pik_rate
                        notionals.append(balance)
                        continue

                    if i < n_pik_periods + n_io_periods:
                        notionals.append(balance)
                        continue

                    amort_idx = idx - (n_pik_periods + n_io_periods)
                    is_reset = pmt is None or (
                        n_reset_periods is not None and amort_idx % n_reset_periods == 0
                    )
                    if is_reset:
                        pmt = self._level_payment(
                            balance,
                            rates,
                            times,
                            i,
                            n_amort_periods,
                        )

                    interest = balance * rates[i] * times[i]
                    balance = max(0.0, balance - ((pmt or 0.0) - interest))
                    notionals.append(balance)
                return notionals
            case _:
                return [self.size] * n_periods

    @property
    def ql(self) -> TType:
        return self._security
