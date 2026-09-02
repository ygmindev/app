import datetime

from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field

from lib_quant.app.utils.quant_settings.quant_settings import QuantSettings
from lib_quant.cashflow.utils.schedule.schedule import Schedule
from lib_quant.datetime.constants import Frequency
from lib_quant.datetime.utils.calendar.calendar import Calendar


class Amortization(BaseModel):
    frequency: Frequency
    size: float = Field(default=1.0)
    start_date: datetime.date = Field(
        default_factory=lambda: QuantSettings.get().calendar.as_of_date
    )
    end_date: datetime.date
    calendar: Calendar = Field(default_factory=lambda: QuantSettings.get().calendar)

    @property
    def dates(self) -> list[datetime.date]:
        return Schedule(
            start_date=self.end_date,
            end_date=self.end_date,
            step=self.frequency.unit_period,
            calendar=self.calendar,
        ).dates

    @property
    def times(self) -> list[float]:
        dates = self.dates
        return [
            self.calendar.year_fraction(dates[i], dates[i + 1])
            for i in range(len(dates) - 1)
        ]

    def notionals(self) -> list[float]:
        raise NotImplementedError()
