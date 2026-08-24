import datetime

import QuantLib as ql
from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field

from lib_quant.datetime.constants import (
    BusinessDayConvention,
    DayCount,
    Direction,
    Region,
)
from lib_quant.datetime.utils.period.period import Period


class Calendar(BaseModel):
    business_day_convention: BusinessDayConvention = (
        BusinessDayConvention.MODIFIED_FOLLOWING
    )
    day_count: DayCount = DayCount.ACT_360
    region: Region = Field(default=Region.US)

    def advance(
        self,
        period: Period,
        start: datetime.date | None = None,
    ) -> datetime.date:
        start = start or datetime.date.today()
        start_date = ql.Date(start.day, start.month, start.year)
        end_date = start_date + period.ql
        return datetime.date(
            end_date.day,
            end_date.month,
            end_date.year,
        )

    def year_fraction(
        self,
        end: datetime.date,
        start: datetime.date | None = None,
    ) -> int:
        start = start or datetime.date.today()
        return self.day_count.ql.yearFraction(
            ql.Date(start.day, start.month, start.year),
            ql.Date(end.day, end.month, end.year),
        )

    def business_days(
        self,
        end: datetime.date,
        start: datetime.date,
        step: Period | None = None,
        direction: Direction = Direction.FORWARD,
    ) -> list[datetime.date]:
        step = step or Period(days=1)
        bdc = self.business_day_convention.ql
        region = self.region
        schedule = ql.Schedule(
            ql.Date(start.day, start.month, start.year),
            ql.Date(end.day, end.month, end.year),
            step.ql,
            region.ql,
            bdc,
            bdc,
            direction.ql,
            False,
        )

        dates = []
        for date in schedule:
            if region.ql.isBusinessDay(date):
                dates.append(datetime.date(date.day, date.month, date.year))
            else:
                date = region.ql.adjust(
                    date,
                    bdc,
                )
                if date not in dates:
                    dates.append(datetime.date(date.day, date.month, date.year))
        return sorted(dates)


calendar = Calendar()
