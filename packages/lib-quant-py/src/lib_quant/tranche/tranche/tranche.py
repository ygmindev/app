import datetime

from lib_quant.fixed_income.fixed_income.fixed_income import FixedIncome


class Tranche(FixedIncome):
    balance: float
    interest_shortfall: float = 0.0
    realized_loss: float = 0.0

    def post_init(self) -> None:
        if self.balance == 0.0:
            self.balance = self.size

    def accrued_interest(
        self,
        as_of_date: datetime.date,
    ) -> None:
        raise NotImplementedError
