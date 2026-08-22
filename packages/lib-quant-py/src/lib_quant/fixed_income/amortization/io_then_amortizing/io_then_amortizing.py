import datetime

from lib_quant.fixed_income.amortizing.amortizing.amortizing import (
    Amortizing,
)

from lib_quant.datetime.utils.period.period import Period


class IOThenAmortizing(Amortizing):
    io_period: Period

    @property
    def n_periods(self) -> int:
        return super().n_periods - (self.io_period // self.frequency.unit_period)

    def _principal(
        self,
        balance: float,
        interest: float,
        level_payment: float | None,
        as_of_date: datetime.date,
    ) -> float | None:
        end = self.calendar.advance(self.io_period, self.issue_date)
        if as_of_date < end:
            return 0.0
        return super()._principal(balance, interest, level_payment, as_of_date)
