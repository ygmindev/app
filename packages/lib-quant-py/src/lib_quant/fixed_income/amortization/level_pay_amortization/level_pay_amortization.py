from lib_shared.core.utils.field.field import Field

from lib_quant.datetime.utils.period.period import Period
from lib_quant.fixed_income.amortization.amortization.amortization import (
    Amortization,
)
from lib_quant.rates.rate.rate import Rate


class LevelPayAmortization(Amortization):
    rate: Rate
    io_period: Period | None = Field(default=None)

    def notionals(self) -> list[float]:
        dates = self.dates
        n_periods = len(dates) - 1
        times = self.times
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
