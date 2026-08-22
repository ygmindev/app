from enum import StrEnum

import QuantLib as ql

from lib_quant.datetime.utils.period.period import Period


class BusinessDayConvention(StrEnum):
    FOLLOWING = "Following"
    MODIFIED_FOLLOWING = "Modified_Following"
    PRECEDING = "Preceding"
    MODIFIED_PREFEDING = "Modified_Preceding"
    UNADJUSTED = "Unadjusted"


class Frequency(StrEnum):
    ANNUAL = "ANNUAL"
    DAILY = "DAILY"
    MONTHLY = "MONTHLY"
    QUARTERLY = "QUARTERLY"
    SEMI_ANNUAL = "SEMI_ANNUAL"
    WEEKLY = "WEEKLY"

    @property
    def frequency_per_year(self) -> int:
        match self:
            case Frequency.ANNUAL:
                return 1
            case Frequency.SEMI_ANNUAL:
                return 2
            case Frequency.QUARTERLY:
                return 4
            case Frequency.MONTHLY:
                return 12
            case Frequency.WEEKLY:
                return 52
            case Frequency.DAILY:
                return 365
            case _:
                raise ValueError(f"Invalid frequency: {self}")

    @property
    def unit_period(self) -> Period:
        match self:
            case Frequency.DAILY:
                return Period(days=1)
            case Frequency.WEEKLY:
                return Period(weeks=1)
            case Frequency.MONTHLY:
                return Period(months=1)
            case Frequency.QUARTERLY:
                return Period(months=3)
            case Frequency.SEMI_ANNUAL:
                return Period(months=6)
            case Frequency.ANNUAL:
                return Period(years=1)
            case _:
                raise ValueError(f"Invalid frequency: {self}")


class Direction(StrEnum):
    FORWARD = "FORWARD"
    BACKWARD = "BACKWARD"


class DayCount(StrEnum):
    ACT_360 = "ACT/360"
    ACT_365 = "ACT/365"
    ACT_ACT = "ACT/ACT"
    THIRTY_360 = "THIRTY/360"

    def to_ql(self) -> ql.DayCounter:
        return _DAY_COUNT_MAP[self]


_DAY_COUNT_MAP: dict[DayCount, ql.DayCounter] = {
    DayCount.ACT_360: ql.Actual360(),
    DayCount.ACT_365: ql.Actual365Fixed(),
    DayCount.ACT_ACT: ql.ActualActual(),
    DayCount.THIRTY_360: ql.Thirty360(),
}


class DateUnit(StrEnum):
    DAY = "DAY"
    WEEK = "WEEK"
    MONTH = "MONTH"
    QUARTER = "QUARTER"
    YEAR = "YEAR"
