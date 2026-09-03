from lib_quant.cashflow.cashflow.cashflow import Cashflow
from lib_quant.instruments.fixed_income.credit.credit.credit import Credit


class CMBSLoan(Credit):
    property_value: float = 0.0
    noi: float = 0.0
    prepay_penalty_months: int = 0

    @property
    def coupon(self) -> float:
        return self.rate.spread

    def cashflows(self) -> Cashflow: ...

    @property
    def ltv(self) -> float:
        if self.property_value <= 0:
            return float("nan")
        return self.size / self.property_value

    @property
    def debt_yield(self) -> float:
        if self.size <= 0:
            return float("nan")
        return self.noi / self.size

    def annual_debt_service(self) -> float:
        schedule = self.cashflows
        periods_per_year = self.payments_per_year
        return sum(p.payment for p in schedule[:periods_per_year])

    @property
    def dscr(self) -> float:
        ads = self.annual_debt_service()
        if ads <= 0:
            return float("nan")
        return self.noi / ads

    def maturity_balance(self) -> float:
        schedule = self.cashflows()
        return schedule[-1].balance if schedule else self.size

    def is_baloon(self) -> bool:
        return self.
