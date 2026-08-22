import datetime

from lib_shared.core.utils.base_model.base_model import BaseModel

from lib_quant.datetime.utils.day_count.day_count import DayCount
from lib_quant.datetime.utils.period.period import Period


class CalendarModel(BaseModel):
    day_count: DayCount = DayCount.ACT_360

    def advance(
        self,
        period: Period,
        start: datetime.date | None = None,
    ) -> datetime.date: ...
