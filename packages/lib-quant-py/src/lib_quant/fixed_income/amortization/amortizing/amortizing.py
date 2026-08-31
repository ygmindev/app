from lib_quant.cashflow.cashflow_event.cashflow_event import CashflowEvent
from lib_quant.cashflow.cashflow_schedule.cashflow_schedule import CashflowSchedule
from lib_quant.cashflow.utils.schedule.schedule import schedule
from lib_quant.datetime.utils.period.period import Period
from lib_quant.fixed_income.amortization.amortizing.constants import AmortizationType
from lib_quant.fixed_income.fixed_income.fixed_income import FixedIncome


class Amortizing(FixedIncome):
    amortization_type: AmortizationType
    io_period: Period | None = None
    rate: float

    @property
    def schedule(self) -> CashflowSchedule:
        result: list[CashflowEvent] = []
        rate = self.rate / self.frequency.frequency_per_year
        balance = 1.0
        unit_period = self.frequency.unit_period

        if self.maturity_date is not None:
            dates = schedule(
                start_date=self.issue_date,
                maturity_date=self.maturity_date,
                frequency=self.frequency,
                calendar=self.calendar,
            )
            io_periods = (
                self.io_period // unit_period if self.io_period is not None else 0
            )
            n_periods = len(dates)
            for t, date in enumerate(dates, 1):
                interest = balance * rate
                periods_left = n_periods - t + 1
                if (
                    t <= io_periods
                    or self.amortization_type == AmortizationType.INTEREST_ONLY
                ):
                    principal = 0.0
                elif self.amortization_type == AmortizationType.BULLET:
                    principal = balance if t == n_periods else 0.0
                elif self.amortization_type == AmortizationType.LEVEL_PAYMENT:
                    if rate == 0.0:
                        payment = balance / periods_left
                    else:
                        payment = balance * rate / (1 - (1 + rate) ** (-periods_left))
                    principal = min(max(payment - interest, 0.0), balance)
                elif self.amortization_type == AmortizationType.STRAIGHT_LINE:
                    principal = min(principal / max(n_periods - io_periods, 1), balance)
                else:
                    principal = 0

                balance_end = balance - principal
                result.append(
                    CashflowEvent(
                        date=date,
                        balance_start=balance,
                        balance_end=balance_end,
                        principal=principal,
                        interest=interest,
                        calendar=self.calendar,
                    )
                )
                balance = balance_end
        return CashflowSchedule(events=result)
