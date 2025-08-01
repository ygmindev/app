import datetime
from typing import Optional, TypedDict

from lib_model.resource.entity_resource import EntityResource


class CurveSnapshot(EntityResource):
    date: datetime.date
    value_1MONTH: Optional[float] = None
    value_3MONTH: Optional[float] = None
    value_6MONTH: Optional[float] = None
    value_1YEAR: Optional[float] = None
    value_2YEAR: Optional[float] = None
    value_3YEAR: Optional[float] = None
    value_5YEAR: Optional[float] = None
    value_7YEAR: Optional[float] = None
    value_10YEAR: Optional[float] = None
    value_20YEAR: Optional[float] = None
    value_30YEAR: Optional[float] = None
    value_40YEAR: Optional[float] = None

    class Settings:
        indexes = ["date"]


class TreasuryYieldCurve(CurveSnapshot): ...


class PolygonTreasuryYieldModel(TypedDict):
    date: str
    yield_1_month: Optional[float]
    yield_3_month: Optional[float]
    yield_1_year: Optional[float]
    yield_2_year: Optional[float]
    yield_3_year: Optional[float]
    yield_5_year: Optional[float]
    yield_10_year: Optional[float]
    yield_30_year: Optional[float]


class PolygonTreasuryYieldResponseModel(TypedDict):
    status: str
    results: list[PolygonTreasuryYieldModel]


class SwapRateCurve(CurveSnapshot): ...


class ChatamSofrOisModel(TypedDict):
    LengthInMonths: int
    PreviousDay: str
    PreviousMonth: str
    PreviousYear: str


class ChatamSofrOisResponseModel(TypedDict):
    PreviousDayDate: str
    PreviousMonthDate: str
    PreviousYearDate: str
    Rates: list[ChatamSofrOisModel]
    Updated: list[PolygonTreasuryYieldModel]
    Updated: list[PolygonTreasuryYieldModel]
    Updated: list[PolygonTreasuryYieldModel]
    Updated: list[PolygonTreasuryYieldModel]
    Updated: list[PolygonTreasuryYieldModel]
