from enum import Enum


class DATE_UNIT(Enum):
    DAY = "DAY"
    WEEK = "WEEK"
    MONTH = "MONTH"
    QUARTER = "QUARTER"
    YEAR = "YEAR"


CURVE_TENORS = [
    {"tenor_unit": DATE_UNIT.MONTH, "tenor": 1},
    {"tenor_unit": DATE_UNIT.MONTH, "tenor": 3},
    {"tenor_unit": DATE_UNIT.MONTH, "tenor": 6},
    {"tenor_unit": DATE_UNIT.YEAR, "tenor": 1},
    {"tenor_unit": DATE_UNIT.YEAR, "tenor": 2},
    {"tenor_unit": DATE_UNIT.YEAR, "tenor": 3},
    {"tenor_unit": DATE_UNIT.YEAR, "tenor": 5},
    {"tenor_unit": DATE_UNIT.YEAR, "tenor": 7},
    {"tenor_unit": DATE_UNIT.YEAR, "tenor": 10},
    {"tenor_unit": DATE_UNIT.YEAR, "tenor": 20},
    {"tenor_unit": DATE_UNIT.YEAR, "tenor": 30},
]
