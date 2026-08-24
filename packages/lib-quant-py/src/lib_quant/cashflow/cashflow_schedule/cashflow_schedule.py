import datetime

import QuantLib as ql
from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field

from lib_quant.app.utils.quant_settings.quant_settings import QuantSettings
from lib_quant.cashflow.cashflow_event.cashflow_event import CashflowEvent
from lib_quant.curve.curve.constants import Compounding
from lib_quant.datetime.utils.calendar.calendar import Calendar


class CashflowSchedule(BaseModel):
    events: list[CashflowEvent] = Field(default_factory=list)
    calendar: Calendar = Field(default_factory=lambda: QuantSettings.get().calendar)

    @property
    def leg(self) -> ql.Leg:
        _leg = ql.Leg()
        for cf in self.events:
            _leg.append(
                ql.SimpleCashFlow(
                    cf.amount, ql.Date(cf.date.day, cf.date.month, cf.date.year)
                )
            )
        return _leg

    def npv(
        self,
        as_of_date: datetime.date,
        rate: float,
        compounding: Compounding = Compounding.CONTINUOUS,
    ) -> float:
        return sum(
            cf.present_value(as_of_date, rate, compounding) for cf in self.events
        )

    def xirr(
        self,
        compounding: Compounding = Compounding.CONTINUOUS,
        guess: float = 0.1,
    ) -> float:
        as_of = self.events[0].date
        as_of = ql.Date(as_of.day, as_of.month, as_of.year)
        try:
            return ql.CashFlows.yieldRate(
                self.leg,
                0.0,
                self.calendar.day_count.ql,
                compounding.ql,
                ql.Annual,
                True,
                as_of,
                as_of,
                1e-10,
                10000,
                guess,
            )
        except RuntimeError as e:
            raise ValueError(f"Failed to calculate XIRR: {e}")
