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
    business_day_convention: BusinessDayConvention = Field(
        default=BusinessDayConvention.MODIFIED_FOLLOWING
    )
    day_count: DayCount = Field(default=DayCount.ACT_ACT)
    region: Region = Field(default=Region.US)
    settlement_days: int = Field(default=2)
    as_of_date: datetime.date = Field(default_factory=datetime.date.today)

    def model_post_init(self, __context: Any) -> None:
        ql.Settings.instance().evaluationDate = ql.Date(
            self.as_of_date.day,
            self.as_of_date.month,
            self.as_of_date.year,
        )

    def advance(
        self,
        period: Period,
        start: datetime.date | None = None,
    ) -> datetime.date:
        start = start or self.as_of_date
        start_date = ql.Date(start.day, start.month, start.year)
        end_date = start_date + period.ql
        return datetime.date(
            end_date.year(),
            end_date.month(),
            end_date.dayOfMonth(),
        )

    def year_fraction(
        self,
        end: datetime.date,
        start: datetime.date | None = None,
    ) -> float:
        start = start or self.as_of_date
        return self.day_count.ql.yearFraction(
            ql.Date(start.day, start.month, start.year),
            ql.Date(end.day, end.month, end.year),
        )

    def n_days(
        self,
        period: Period,
        start: datetime.date | None = None,
    ) -> int:
        start = start or self.as_of_date
        end = self.advance(period, start)
        return self.day_count.ql.dayCount(
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
        from lib_quant.cashflow.utils.schedule.schedule import Schedule

        step = step or Period(days=1)
        bdc = self.business_day_convention.ql
        region = self.region
        schedule = Schedule(
            start_date=start,
            end_date=end,
            step=step,
            direction=direction,
            calendar=self,
        )
        dates = []
        for date in schedule.ql:
            if region.ql.isBusinessDay(date):
                dates.append(
                    datetime.date(date.year(), date.month(), date.dayOfMonth())
                )
            else:
                date = region.ql.adjust(
                    date,
                    bdc,
                )
                if date not in dates:
                    dates.append(
                        datetime.date(date.year(), date.month(), date.dayOfMonth())
                    )
        return dates

    def ratio(
        self,
        start: Period,
        end: Period,
        anchor: datetime.date | None = None,
    ) -> float:
        anchor = anchor or self.as_of_date
        end_days = self.n_days(end, anchor)
        if end_days == 0:
            raise ValueError("Divide by zero")
        return self.n_days(start, anchor) / end_days
