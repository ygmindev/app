import datetime
from typing import Self

from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field
from lib_shared.core.utils.private_field.private_field import PrivateField

from lib_quant.app.utils.quant_settings.quant_settings import QuantSettings
from lib_quant.cashflow.cashflow_schedule.cashflow_schedule import CashflowSchedule
from lib_quant.datetime.constants import Frequency
from lib_quant.datetime.utils.calendar.calendar import Calendar
from lib_quant.datetime.utils.period.period import Period


class BaseProvision(BaseModel):
    calendar: Calendar = Field(default_factory=lambda: QuantSettings.get().calendar)
    lockout_period: Period | None = Field(default=None)

    _start_date: datetime.date | None = PrivateField(default=None)
    _cashflows: CashflowSchedule | None = PrivateField(default=None)
    _frequency: Frequency | None = PrivateField(default=None)
    _lockout_end_date: datetime.date | None = PrivateField(default=None)

    def bind(
        self,
        start_date: datetime.date,
        cashflows: CashflowSchedule,
        frequency: Frequency,
    ) -> Self:
        self._start_date = start_date
        self._cashflows = cashflows
        self._frequency = frequency
        if self.lockout_period is not None:
            self._lockout_end_date = self.calendar.advance(
                self.lockout_period,
                start_date,
            )
        return self

    def _is_prepayable(
        self,
        date: datetime.date,
    ) -> bool:
        raise NotImplementedError("Subclasses must implement the _is_prepayable method")

    def is_prepayable(
        self,
        date: datetime.date,
    ) -> bool:
        if self._lockout_end_date is not None and date < self._lockout_end_date:
            return False
        return self._is_prepayable(date)

    def penalty(
        self,
        date: datetime.date,
        prepaid_principal: float,
    ) -> float:
        raise NotImplementedError("Subclasses must implement the penalty method")
