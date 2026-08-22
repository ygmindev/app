import datetime

import QuantLib as ql
from dateutil.relativedelta import relativedelta

from lib_quant.datetime.constants import DateUnit
from lib_quant.datetime.utils.calendar.calendar_models import CalendarModel
from lib_quant.datetime.utils.period.period import Period


class Calendar(CalendarModel):
    def advance(
        self,
        period: Period,
        start: datetime.date | None = None,
    ) -> datetime.date:
        start = start or datetime.date.today()
        match period.unit:
            case DateUnit.DAY:
                unit = "days"
            case DateUnit.WEEK:
                unit = "weeks"
            case DateUnit.MONTH:
                unit = "months"
            case DateUnit.QUARTER:
                unit = "quarters"
            case DateUnit.YEAR:
                unit = "years"
            case _:
                raise ValueError(f"Invalid period unit: {period.unit}")
        return start + relativedelta(**{unit: int(period.value)})

    def year_fraction(
        self,
        end: datetime.date,
        start: datetime.date | None = None,
    ) -> int:
        start = start or datetime.date.today()
        return self.day_count.to_ql().yearFraction(
            ql.Date(start.day, start.month, start.year),
            ql.Date(end.day, end.month, end.year),
        )

    def business_days(
        self,
        end: datetime.date,
        start: datetime.date,
        step: Period = Period(days=1),
    ) -> list[datetime.date]:
        schedule = ql.Schedule(
            ql.Date(start.day, start.month, start.year),
            ql.Date(end.day, end.month, end.year),
            step.to_ql(),
            self.region,
            self.bdc,
            self.bdc,
            self.direction,
            False,
        )

        dates = []
        for date in schedule:
            if region.isBusinessDay(date):
                dates.append(datetime.date(date.day, date.month, date.year))
            else:
                date = region.adjust(
                    date,
                    bdc,
                )
                if date not in dates:
                    dates.append(datetime.date(date.day, date.month, date.year))
        return sorted(dates)
