import datetime

from lib_quant.datetime.utils.period.period import Period
from lib_quant.instruments.fixed_income.credit.loan.floating_rate_loan.floating_rate_loan import (
    FloatingRateLoan,
)


class RealEstateCredit(FloatingRateLoan):
    property_value: float = 0.0
    net_operating_income: float = 0.0

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
        if size <= 0:
            raise ValueError("balance must be positive")
        return self.net_operating_income / size

    def debt_service(
        self,
        period: Period | None = None,
        as_of_date: datetime.date | None = None,
    ) -> float:
        schedule = self.cashflows()
        period = period or Period(years=1)
        start_date = as_of_date or self.calendar.as_of_date
        end_date = self.calendar.advance(period, start_date)
        cashflows = [e for e in schedule.events if start_date < e.date <= end_date]
        return sum(event.amount_scheduled for event in cashflows)

    def dscr(
        self,
        as_of_date: datetime.date | None = None,
    ) -> float:
        ads = self.debt_service(as_of_date=as_of_date)
        if ads <= 0:
            raise ValueError("annual debt service must be positive")
        return self.net_operating_income / ads

    def underwriting_dscr(self) -> float:
        return self.dscr(as_of_date=self.issue_date)

    def cap_rate(self) -> float:
        if self.property_value <= 0:
            raise ValueError("property value must be positive")
        return self.net_operating_income / self.property_value
