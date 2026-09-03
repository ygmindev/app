from lib_quant.instruments.fixed_income.credit.loan.floating_rate_loan.floating_rate_loan import (
    FloatingRateLoan,
)


class RealEstateCredit(FloatingRateLoan):
    property_value: float = 0.0
    net_operating_income: float = 0.0
    # prepayment

    def ltv(
        self,
        balance: float | None = None,
    ) -> float:
        size = self.size if balance is None else balance
        if self.property_value <= 0:
            raise ValueError("property value must be positive")
        return size / self.property_value

    def debt_yield(
        self,
        balance: float | None = None,
    ) -> float:
        size = self.size if balance is None else balance
        if self.property_value <= 0:
            raise ValueError("property value must be positive")
        return self.net_operating_income / size

    def annual_debt_service(self) -> float:
        schedule = self.cashflows()
        first_year = schedule.events[: self.frequency.frequency_per_year]
        return sum(x.amount for x in first_year)

    def dscr(self) -> float:
        ads = self.annual_debt_service()
        if ads <= 0:
            raise ValueError("annual debt service must be positive")
        return self.net_operating_income / ads

    def cap_rate(self) -> float:
        if self.property_value <= 0:
            raise ValueError("property value must be positive")
        return self.net_operating_income / self.property_value
