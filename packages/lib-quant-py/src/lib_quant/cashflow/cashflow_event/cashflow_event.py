import datetime

from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field

from lib_quant.app.utils.quant_settings.quant_settings import QuantSettings
from lib_quant.cashflow.utils.discount_factor.discount_factor import discount_factor
from lib_quant.curve.curve.constants import Compounding
from lib_quant.datetime.constants import Frequency
from lib_quant.datetime.utils.calendar.calendar import Calendar


class CashflowEvent(BaseModel):
    balance_end: float | None = Field(default=None)
    balance_start: float | None = Field(default=None)
    calendar: Calendar = Field(default_factory=lambda: QuantSettings.get().calendar)
    date: datetime.date
    interest_paid: float = Field(default=0.0)
    interest_scheduled: float = Field(default=0.0)
    pik_capitalized: float = Field(0.0)
    principal_paid: float = Field(default=1.0)
    principal_scheduled: float = Field(default=1.0)

    @property
    def amount_scheduled(self) -> float:
        return self.principal_scheduled + self.interest_scheduled

    @property
    def amount_paid(self) -> float:
        return self.principal_paid + self.interest_paid

    def present_value(
        self,
        as_of_date: datetime.date,
        rate: float,
        compounding: Compounding = Compounding.CONTINUOUS,
        frequency: Frequency = Frequency.ANNUAL,
    ) -> float:
        if self.date <= as_of_date:
            return self.amount_scheduled
        t = self.calendar.year_fraction(as_of_date, self.date)
        return discount_factor(
            rate,
            t,
            compounding,
            self.calendar.day_count,
            frequency,
        )
