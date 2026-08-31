import datetime

import QuantLib as ql

from lib_quant.app.utils.quant_settings.quant_settings import QuantSettings
from lib_quant.datetime.constants import Direction, Frequency
from lib_quant.datetime.utils.calendar.calendar import Calendar


def _schedule(
    start_date: datetime.date,
    end_date: datetime.date,
    frequency: Frequency,
    direction: Direction = Direction.BACKWARD,
    calendar: Calendar | None = None,
) -> list[datetime.date]:
    calendar = calendar or QuantSettings.get().calendar
    bdc = calendar.business_day_convention.ql
    dates = ql.Schedule(
        ql.Date(start_date.day, start_date.month, start_date.year),
        ql.Date(end_date.day, end_date.month, end_date.year),
        frequency.unit_period.ql,
        calendar.region.ql,
        bdc,
        bdc,
        direction.ql,
        False,
    )
    return list(
        map(
            lambda x: datetime.date(x.year(), x.month(), x.dayOfMonth()),
            dates,
        )
    )


schedule = _schedule
