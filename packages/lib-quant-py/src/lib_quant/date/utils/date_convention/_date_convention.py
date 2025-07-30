from typing import Any

import QuantLib as ql

from lib_quant.date.constants import BUSINESSS_DAY_CONVENTION, CALENDAR, DAY_COUNT
from lib_quant.date.utils.date_convention._date_convention_models import (
    _DateConventionModel,
)


class _DateConvention(_DateConventionModel):
    _business_day_convention: Any | None = None
    _calendar: Any | None = None
    _day_count: Any | None = None

    def __init__(self, **kwargs):
        super().__init__(**kwargs)

        match self.business_day_convention:
            case BUSINESSS_DAY_CONVENTION.MODIFIED_FOLLOWING:
                self._business_day_convention = ql.ModifiedFollowing
            case BUSINESSS_DAY_CONVENTION.PRECEDING:
                self._business_day_convention = ql.Preceding
            case BUSINESSS_DAY_CONVENTION.FOLLOWING:
                self._business_day_convention = ql.Following
            case BUSINESSS_DAY_CONVENTION.UNADJUSTED:
                self._business_day_convention = ql.Unadjusted
            case _:
                raise ValueError("Invalid business day convention")

        match self.calendar:
            case CALENDAR.US:
                self._calendar = ql.UnitedStates(ql.UnitedStates.NYSE)
            case CALENDAR.UK:
                self._calendar = ql.UnitedKingdom()
            case _:
                raise ValueError("Invalid calendar")

        match self.day_count:
            case DAY_COUNT.ACT_360:
                self._day_count = ql.Actual360()
            case DAY_COUNT.ACT_365:
                self._day_count = ql.Actual365Fixed()
            case DAY_COUNT.THIRTY_360:
                self._day_count = ql.Thirty360()
            case DAY_COUNT.ACT_ACT:
                self._day_count = ql.ActualActual()
            case _:
                raise ValueError("Invalid day count convention")
