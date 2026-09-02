import numpy as np
from lib_shared.core.utils.field.field import Field

from lib_quant.cashflow.utils.schedule.schedule import Schedule
from lib_quant.curve.bootstrappable_curve.bootstrappable_curve import (
    BootstrappableCurve,
)
from lib_quant.datetime.constants import Frequency
from lib_quant.datetime.utils.period.period import Period
from lib_quant.fixed_income.credit.constants import AmortizationType
from lib_quant.fixed_income.fixed_income.fixed_income import FixedIncome


class Credit(FixedIncome):
    amortization: AmortizationType | None = Field(default=None)
    io_period: Period | None = Field(default=None)

    def yield_from_price(
        self,
        value: float,
    ) -> float:
        raise NotImplementedError(
            "yield_from_price method must be implemented in subclasses"
        )

    def price_from_yield(
        self,
        value: float,
    ) -> float:
        raise NotImplementedError(
            "price_from_yield method must be implemented in subclasses"
        )

    def price_from_zspread(
        self,
        value: float,
        curve: BootstrappableCurve,
    ) -> float:
        raise NotImplementedError(
            "price_from_zspread method must be implemented in subclasses"
        )

    def zspread_from_price(
        self,
        value: float,
        curve: BootstrappableCurve,
    ) -> float:
        raise NotImplementedError(
            "zspread_from_price method must be implemented in subclasses"
        )

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

        match self.amortization:
            case AmortizationType.STRAIGHT_LINE:
                step = self.size / n_periods
                return np.linspace(self.size, step, n_periods).tolist()
            case AmortizationType.LEVEL_PAY:
                times = [
                    self.calendar.year_fraction(dates[i], dates[i + 1])
                    for i in range(len(dates) - 1)
                ]
                n_periods = len(dates) - 1
                rates = [self.rate.all_in_rate(x) for x in dates]
                if self.io_period is None:
                    n_io_periods = 0
                    notionals_io = []
                else:
                    n_io_periods = self.io_period // self.frequency.unit_period
                    notionals_io = [self.size] * n_io_periods

                balance = self.size
                denominator_sum = 0.0
                cumulative = 1.0

                for i in range(n_io_periods, n_periods):
                    cumulative *= 1.0 + rates[i] * times[i]
                    denominator_sum += 1.0 / cumulative

                pmt = self.size / denominator_sum if denominator_sum > 0 else 0.0
                notionals_amort = []
                balance = self.size
                for i in range(n_io_periods, n_periods):
                    interest = balance * rates[i] * times[i]
                    principal_paid = pmt - interest
                    balance = max(0.0, balance - principal_paid)
                    notionals_amort.append(balance)
                return notionals_io + notionals_amort
            case _:
                return [self.size] * n_periods
