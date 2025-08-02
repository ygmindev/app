import datetime
from typing import Optional, TypedDict

import attr
from pymongo import IndexModel

from lib_model.resource.entity_resource import EntityResource


@attr.s(auto_attribs=True, kw_only=True)
class SourcedEntityResource(EntityResource):
    source: str


@attr.s(auto_attribs=True, kw_only=True)
class CurveSnapshot(SourcedEntityResource):
    date: datetime.date
    value_1MONTH: Optional[float] = None
    value_2MONTH: Optional[float] = None
    value_3MONTH: Optional[float] = None
    value_4MONTH: Optional[float] = None
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
        indexes = [
            IndexModel([("date", -1)], unique=True),
        ]


@attr.s(auto_attribs=True, kw_only=True)
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
    Updated: list[PolygonTreasuryYieldModel]
    Updated: list[PolygonTreasuryYieldModel]
    Updated: list[PolygonTreasuryYieldModel]
    Updated: list[PolygonTreasuryYieldModel]
