from enum import StrEnum

import QuantLib as ql


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
