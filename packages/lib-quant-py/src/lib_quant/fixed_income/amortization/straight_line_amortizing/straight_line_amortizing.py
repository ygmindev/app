import datetime

from lib_quant.fixed_income.amortizing.amortizing.amortizing import (
    Amortizing,
)


class StraightLineAmortizing(Amortizing):
    def _level(
        self,
        balance: float,
        rate: float,
    ) -> float | None:
        return None

    def _principal(
        self,
        balance: float,
        interest: float,
        level_payment: float | None,
        as_of_date: datetime.date,
    ) -> float | None:
        principal = 1.0 / self.n_periods
        return min(principal, balance)
