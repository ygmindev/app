from enum import StrEnum
from typing import TYPE_CHECKING, Any

import QuantLib as ql

if TYPE_CHECKING:
    from lib_quant.cashflow.utils.schedule.schedule import Schedule
    from lib_quant.datetime.utils.period.period import Period


class BusinessDayConvention(StrEnum):
    FOLLOWING = "Following"
    MODIFIED_FOLLOWING = "Modified_Following"
    PRECEDING = "Preceding"
    MODIFIED_PRECEDING = "Modified_Preceding"
    UNADJUSTED = "Unadjusted"

    @property
    def ql(self) -> Any:
        return {
            BusinessDayConvention.FOLLOWING: ql.Following,
            BusinessDayConvention.MODIFIED_FOLLOWING: ql.ModifiedFollowing,
            BusinessDayConvention.PRECEDING: ql.Preceding,
            BusinessDayConvention.MODIFIED_PRECEDING: ql.ModifiedPreceding,
            BusinessDayConvention.UNADJUSTED: ql.Unadjusted,
        }[self]


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
    def unit_period(self) -> "Period":
        from lib_quant.datetime.utils.period.period import Period

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

    @property
    def ql(self) -> int:
        match self:
            case Frequency.ANNUAL:
                return ql.Annual
            case Frequency.SEMI_ANNUAL:
                return ql.Semiannual
            case Frequency.QUARTERLY:
                return ql.Quarterly
            case Frequency.MONTHLY:
                return ql.Monthly
            case Frequency.WEEKLY:
                return ql.Weekly
            case Frequency.DAILY:
                return ql.Daily
            case _:
                raise ValueError(f"Invalid frequency: {self}")


class Direction(StrEnum):
    FORWARD = "FORWARD"
    BACKWARD = "BACKWARD"

    @property
    def ql(self) -> Any:
        return {
            Direction.FORWARD: ql.DateGeneration.Forward,
            Direction.BACKWARD: ql.DateGeneration.Backward,
        }[self]


class DayCount(StrEnum):
    ACT_360 = "ACT/360"
    ACT_365 = "ACT/365"
    ACT_ACT = "ACT/ACT"
    THIRTY_360 = "THIRTY/360"

    def ql_schedule(self, schedule: "Schedule | None") -> ql.DayCounter:
        if self is DayCount.ACT_360:
            return ql.Actual360()
        if self is DayCount.ACT_365:
            return ql.Actual365Fixed()
        if self is DayCount.ACT_ACT:
            if schedule is not None:
                return ql.ActualActual(ql.ActualActual.ISMA, schedule.ql)
            return ql.ActualActual(ql.ActualActual.ISMA)
        if self is DayCount.THIRTY_360:
            return ql.Thirty360(ql.Thirty360.ISMA)
        raise ValueError(self)

    @property
    def ql(self) -> ql.DayCounter:
        return self.ql_schedule(None)


class Region(StrEnum):
    US = "US"
    UK = "UK"

    @property
    def ql(self) -> ql.Calendar:
        return {
            Region.US: ql.UnitedStates(ql.UnitedStates.NYSE),
            Region.UK: ql.UnitedKingdom(),
        }[self]


class DateUnit(StrEnum):
    DAY = "DAY"
    WEEK = "WEEK"
    MONTH = "MONTH"
    QUARTER = "QUARTER"
    YEAR = "YEAR"
