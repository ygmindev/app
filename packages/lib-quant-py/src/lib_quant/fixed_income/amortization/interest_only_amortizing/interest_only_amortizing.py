import datetime

from lib_quant.fixed_income.amortizing.amortizing.amortizing import (
    Amortizing,
)


class InterestOnlyAmortizing(Amortizing):
    def _level(
        self,
        balance: float,
        rate: float,
    ) -> float | None:
        return balance * rate

    def _principal(
        self,
        balance: float,
        interest: float,
        level_payment: float | None,
        as_of_date: datetime.date,
    ) -> float | None:
        return 0.0
