import datetime

from lib_quant.cashflow.cashflow_event.cashflow_event import CashflowEvent
from lib_quant.cashflow.cashflow_schedule.cashflow_schedule import CashflowSchedule
from lib_quant.datetime.utils.period.period import Period
from lib_quant.fixed_income.fixed_income.fixed_income import FixedIncome


class Amortizing(FixedIncome):
    amortization_period: Period
    rate: float

    def _level(
        self,
        balance: float,
        rate: float,
    ) -> float | None: ...

    def _principal(
        self,
        balance: float,
        interest: float,
        level_payment: float | None,
        as_of_date: datetime.date,
    ) -> float | None: ...

    @property
    def n_periods(self) -> int:
        return self.amortization_period // self.frequency.unit_period

    @property
    def schedule(self) -> CashflowSchedule:
        result: list[CashflowEvent] = []
        rate = self.rate / self.frequency.frequency_per_year
        balance = 1.0
        unit_period = self.frequency.unit_period
        level = self._level(balance, rate)
        as_of_date = self.issue_date
        maturity_date = self.maturity_date
        if maturity_date is not None:
            while as_of_date < maturity_date:
                as_of_date = self.calendar.advance(unit_period, as_of_date)
                interest = balance * rate
                if as_of_date == maturity_date:
                    principal = balance
                else:
                    principal = (
                        self._principal(
                            balance,
                            interest,
                            level,
                            as_of_date,
                        )
                        or 0.0
                    )
                balance_end = balance - principal
                result.append(
                    CashflowEvent(
                        date=as_of_date,
                        balance_start=balance,
                        balance_end=balance_end,
                        principal=principal,
                        interest=interest,
                        calendar=self.calendar,
                    )
                )
                balance = balance_end
        return CashflowSchedule(events=result)
