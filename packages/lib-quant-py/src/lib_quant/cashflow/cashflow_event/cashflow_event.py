import datetime
import math

from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field

from lib_quant.app.utils.quant_settings.quant_settings import QuantSettings
from lib_quant.curve.curve.constants import Compounding
from lib_quant.datetime.utils.calendar.calendar import Calendar


class CashflowEvent(BaseModel):
    balance_end: float | None = None
    balance_start: float | None = None
    calendar: Calendar = Field(
        default_factory=lambda: QuantSettings.get_settings().calendar
    )
    date: datetime.date
    interest: float = 0.0
    principal: float = 1.0

    @property
    def amount(self) -> float:
        return self.principal + self.interest

    def present_value(
        self,
        as_of_date: datetime.date,
        rate: float,
        compounding: Compounding = Compounding.CONTINUOUS,
    ) -> float:
        if self.date <= as_of_date:
            return self.amount
        t = self.calendar.year_fraction(as_of_date, self.date)
        match compounding:
            case Compounding.COMPOUNDED:
                discount_factor = (1.0 + rate) ** (-t)
            case Compounding.CONTINUOUS:
                discount_factor = math.exp(-rate * (self.date - as_of_date).days)
            case _:
                raise ValueError(f"Invalid compounding: {compounding}")
        return self.amount * discount_factor
