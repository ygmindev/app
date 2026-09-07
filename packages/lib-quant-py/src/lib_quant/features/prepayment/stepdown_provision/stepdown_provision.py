import datetime
from typing import Self

from lib_shared.core.utils.field.field import Field
from lib_shared.core.utils.private_field.private_field import PrivateField

from lib_quant.cashflow.cashflow_schedule.cashflow_schedule import CashflowSchedule
from lib_quant.datetime.constants import Frequency
from lib_quant.datetime.utils.period.period import Period
from lib_quant.features.prepayment.base_provision.base_provision import BaseProvision


class StepdownProvision(BaseProvision):
    steps: list[tuple[Period, float]] = Field(default_factory=list)

    _steps_by_date: list[tuple[datetime.date, float]] = PrivateField(
        default_factory=list
    )

    def bind(
        self,
        start_date: datetime.date,
        cashflows: CashflowSchedule,
        frequency: Frequency,
    ) -> Self:
        date = start_date
        steps = []
        for period, rate in self.steps:
            date = self.calendar.advance(period, date)
            steps.append((date, rate))
        self._steps_by_date = steps
        return self

    def _is_prepayable(
        self,
        date: datetime.date,
    ) -> bool:
        return True

    def penalty(
        self,
        date: datetime.date,
        prepaid_principal: float,
    ) -> float:
        for dt, rate in self._steps_by_date:
            if date < dt:
                return prepaid_principal * rate
        return 0.0
