from pydantic import BaseModel

from lib_quant.date.constants import BUSINESSS_DAY_CONVENTION, CALENDAR, DAY_COUNT


class DateConventionModel(BaseModel):
    business_day_convention: BUSINESSS_DAY_CONVENTION = BUSINESSS_DAY_CONVENTION.MODIFIED_FOLLOWING
    calendar: CALENDAR = CALENDAR.US
    day_count: DAY_COUNT = DAY_COUNT.ACT_360
