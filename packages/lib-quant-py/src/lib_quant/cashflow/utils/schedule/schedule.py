import datetime
from typing import cast

import QuantLib as ql
from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field
from lib_shared.core.utils.private_field.private_field import PrivateField

from lib_quant.app.utils.quant_settings.quant_settings import QuantSettings
from lib_quant.datetime.constants import Direction
from lib_quant.datetime.utils.calendar.calendar import Calendar
from lib_quant.datetime.utils.period.period import Period


class Schedule(BaseModel):
    start_date: datetime.date = Field(
        default_factory=lambda: QuantSettings.get().calendar.as_of_date
    )
    end_date: datetime.date
    step: Period = Field(default_factory=lambda: Period(days=1))
    direction: Direction = Direction.BACKWARD
    calendar: Calendar = Field(default_factory=lambda: QuantSettings.get().calendar)

    _schedule: "ql.Schedule" = PrivateField()

    def post_init(self) -> None:
        bdc = self.calendar.business_day_convention.ql
        self._schedule = ql.Schedule(
            ql.Date(self.start_date.day, self.start_date.month, self.start_date.year),
            ql.Date(self.end_date.day, self.end_date.month, self.end_date.year),
            self.step.ql,
            self.calendar.region.ql,
            bdc,
            bdc,
            Direction(self.direction).ql,
            False,
        )

    @property
    def ql(self) -> ql.Schedule:
        return self._schedule

    @property
    def dates(self) -> list[datetime.date]:
        return list(
            map(
                lambda x: datetime.date(x.year(), x.month(), x.dayOfMonth()),
                cast(list[ql.Date], self._schedule),
            )
        )
