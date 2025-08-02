import asyncio
import xml.etree.ElementTree as ET
from datetime import date, datetime
from typing import Any, TypedDict, cast

import QuantLib as ql
from lib_model.models import (
    ChatamSofrOisResponseModel,
    PolygonTreasuryYieldResponseModel,
    SwapRateCurve,
    TreasuryYieldCurve,
)
from lib_shared.database.utils.api_data_loader import ApiDataLoader
from lib_shared.database.utils.api_data_loader.api_data_loader_models import (
    ApiDataLoaderParams,
)
from lib_shared.database.utils.database import database
from lib_shared.date.constants import CURVE_TENORS, DATE_UNIT
from lib_shared.http.utils.constants import HTTP_CONTENT_TYPE
from lib_shared.http.utils.http_client import http_client
from scipy import optimize

trial = 5


async def main() -> None:
    await database.initialize()

    if trial == 1:

        def load_treasury_yield(
            response: PolygonTreasuryYieldResponseModel,
        ) -> list[TreasuryYieldCurve]:
            docs = []
            for row in response["results"]:
                doc = {"date": datetime.strptime(row["date"], "%Y-%m-%d").date()}
                for tenor in CURVE_TENORS:
                    column = (
                        f"yield_{tenor["tenor"]}_{tenor["tenor_unit"].value.lower()}"
                    )
                    if column in row:
                        doc[f"value_{tenor["tenor"]}{tenor["tenor_unit"].value}"] = row[
                            column
                        ]
                docs.append(doc)
            return docs

        loader = ApiDataLoader(
            ApiDataLoaderParams(
                uri="https://api.polygon.io/fed/v1/treasury-yields",
                response=PolygonTreasuryYieldResponseModel,
                resource=TreasuryYieldCurve,
                params={
                    "sort": "date.desc",
                    "limit": 1,
                    "apiKey": "spl4XZ9HTCTndp3nu5B4zzBM2u_gstCV",
                },
                transformer=load_treasury_yield,
            )
        )
        await loader.upload()

    if trial == 2:
        result = await http_client.get(
            "https://www.chathamfinancial.com/getrates/292097",
            response_type=ChatamSofrOisResponseModel,
            headers={
                "Accept-Encoding": "gzip, deflate, br, zstd",
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
            },
        )

        docs = []
        doc = {"date": datetime.strptime(result["PreviousDayDate"], "%Y-%m-%d").date()}
        for row in result["Rates"]:
            tenor = row["LengthInMonths"]
            tenor_unit = DATE_UNIT.MONTH
            if tenor >= 12:
                tenor = tenor // 12
                tenor_unit = DATE_UNIT.YEAR
            doc[f"value_{tenor}{tenor_unit.value}"] = float(row["PreviousDay"])
        docs.append(SwapRateCurve(**doc))
        await database.create_many(data=docs, resource=SwapRateCurve)

    if trial == 3:
        result = await http_client.get(
            "https://en.macromicro.me/charts/data/115044",
            headers={
                "priority": "u=1, i",
                "Accept-Encoding": "gzip, deflate, br, zstd",
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
                "Authorization": "Bearer 2d320f40dc02f930cc9fb204afd7443b",
                "Content-Type": "application/json",
                "Referer": "https://en.macromicro.me/collections/9/us-market-relative/115044/us-overnight-indexed-swaps",
                "Sec-Ch-Ua": '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
                "sec-fetch-dest": "empty",
                "sec-fetch-mode": "cors",
                "sec-fetch-site": "same-origin",
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
            },
        )
        print(result)

    if trial == 4:
        # bday = pd.Timestamp(str(datetime.today())) - pd.tseries.offsets.BusinessDay(n=1)
        result = await database.find(
            model=SwapRateCurve,
            query={},
            # query={"date": bday.date()},
        )
        row = result[-1]
        quotes = {
            "1Y": row.value_1YEAR,
            "2Y": row.value_2YEAR,
            "3Y": row.value_3YEAR,
            "5Y": row.value_5YEAR,
            "7Y": row.value_7YEAR,
            "10Y": row.value_10YEAR,
            "15Y": row.value_15YEAR,
            "30Y": row.value_30YEAR,
        }
        today = datetime.today()
        today = ql.Date(today.day, today.month, today.year)
        settlement_days = 2
        calendar = ql.UnitedStates(ql.UnitedStates.NYSE)
        sofr_index = ql.OvernightIndex(
            "SOFR",
            settlement_days,
            ql.USDCurrency(),
            calendar,
            ql.Actual360(),
            ql.YieldTermStructureHandle(),
        )
        rate_helpers = [
            ql.OISRateHelper(
                settlement_days,
                ql.Period(tenor),
                ql.QuoteHandle(ql.SimpleQuote(rate)),
                sofr_index,
            )
            for tenor, rate in quotes.items()
        ]
        discount_curve = ql.PiecewiseLogCubicDiscount(
            today,
            rate_helpers,
            ql.Actual365Fixed(),
        )
        discount_curve.enableExtrapolation()
        discount_handle = ql.YieldTermStructureHandle(discount_curve)

        # Example bond
        maturity_date = ql.Date(25, 7, 2035)
        coupon_rate = 0.06
        face_value = 100
        frequency = ql.Semiannual
        day_count = ql.Actual360()

        schedule = ql.Schedule(
            today,
            maturity_date,
            ql.Period(frequency),
            calendar,
            ql.ModifiedFollowing,
            ql.ModifiedFollowing,
            ql.DateGeneration.Backward,
            False,
        )

        bond = ql.FixedRateBond(
            settlement_days,
            face_value,
            schedule,
            [coupon_rate],
            day_count,
        )

        # Set pricing engine using OIS curve
        bond.setPricingEngine(ql.DiscountingBondEngine(discount_handle))
        # Market clean price
        market_price = 98.5

        # Function: bond NPV under flat spread over OIS curve
        def bond_price_given_spread(spread_bps):
            spread = spread_bps / 10000.0  # convert bps to decimal
            spreaded_curve = ql.ZeroSpreadedTermStructure(
                discount_handle,
                ql.QuoteHandle(ql.SimpleQuote(spread)),
                ql.Compounded,
                frequency,
                day_count,
            )
            bond.setPricingEngine(
                ql.DiscountingBondEngine(ql.YieldTermStructureHandle(spreaded_curve))
            )
            return bond.cleanPrice()

        # Root-finding: price(spread) - market_price = 0
        def objective(spread_bps):
            return bond_price_given_spread(spread_bps) - market_price

        print("First pillar date:", rate_helpers[0].latestDate())
        print("Evaluation date:", today)

        z_spread = optimize.brentq(
            objective,
            a=-1000,
            b=1000,
            xtol=1e-6,
        )

        print(f"Z-spread: {z_spread:.2f} bps")

    if trial == 5:

        class ResponseModel(TypedDict):
            NEW_DATE: str
            BC_1MONTH: float
            BC_2MONTH: float
            BC_3MONTH: float
            BC_4MONTH: float
            BC_6MONTH: float
            BC_1YEAR: float
            BC_2YEAR: float
            BC_3YEAR: float
            BC_5YEAR: float
            BC_7YEAR: float
            BC_10YEAR: float
            BC_20YEAR: float
            BC_30YEAR: float

        def load_treasury_yield_xml(
            response: Any,
        ) -> list[TreasuryYieldCurve]:
            root = ET.fromstring(response)
            ns = {
                "atom": "http://www.w3.org/2005/Atom",
                "m": "http://schemas.microsoft.com/ado/2007/08/dataservices/metadata",
                "d": "http://schemas.microsoft.com/ado/2007/08/dataservices",
            }
            data = []
            for entry in root.findall("atom:entry", ns):
                props = entry.find("atom:content/m:properties", ns)
                if props is None:
                    continue
                row = {}
                for child in props:
                    tag = child.tag.split("}")[-1]
                    text = child.text
                    if text:
                        try:
                            row[tag] = float(text)
                        except ValueError:
                            row[tag] = text
                row = cast(ResponseModel, row)
                data.append(
                    {
                        "date": datetime.strptime(
                            row["NEW_DATE"], "%Y-%m-%dT%H:%M:%S"
                        ).date(),
                        "value_1MONTH": row["BC_1MONTH"],
                        "value_2MONTH": row["BC_2MONTH"],
                        "value_3MONTH": row["BC_3MONTH"],
                        "value_4MONTH": row["BC_4MONTH"],
                        "value_6MONTH": row["BC_6MONTH"],
                        "value_1YEAR": row["BC_1YEAR"],
                        "value_2YEAR": row["BC_2YEAR"],
                        "value_3YEAR": row["BC_3YEAR"],
                        "value_5YEAR": row["BC_5YEAR"],
                        "value_7YEAR": row["BC_7YEAR"],
                        "value_10YEAR": row["BC_10YEAR"],
                        "value_20YEAR": row["BC_20YEAR"],
                        "value_30YEAR": row["BC_30YEAR"],
                    }
                )
            return data

        month_str = date.today().strftime("%Y%m")
        loader = ApiDataLoader(
            ApiDataLoaderParams(
                uri="https://home.treasury.gov/resource-center/data-chart-center/interest-rates/pages/xmlview",
                response=Any,
                resource=TreasuryYieldCurve,
                content_type=HTTP_CONTENT_TYPE.XML,
                params={
                    "data": "daily_treasury_yield_curve",
                    "field_tdr_date_value_month": month_str,
                },
                transformer=load_treasury_yield_xml,
            )
        )
        await loader.upload()


if __name__ == "__main__":
    asyncio.run(main())

# import asyncio
# from typing import cast

# import QuantLib as ql
# from lib_model.models import PolygonResponseModel, TreasuryYieldModel

# # from lib_shared.database.utils.database import database
# from lib_shared.http.utils.http_client import http_client
# from scipy import optimize

# trial = 2


# async def main() -> None:
#     # await database.initialize()

#     if trial == 1:
#         result = await http_client.get(
#             "https://api.polygon.io/fed/v1/treasury-yields",
#             response_type=PolygonResponseModel,
#             params={
#                 "sort": "date.desc",
#                 "limit": 1,
#                 "apiKey": "spl4XZ9HTCTndp3nu5B4zzBM2u_gstCV",
#             },
#             headers={
#                 "Accept-Encoding": "gzip, deflate, br, zstd",
#                 "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36",
#                 "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
#             },
#         )
#         docs = list(map(lambda v: TreasuryYieldModel(**v), result["results"]))
#         # await database.create_many(docs=docs, model=TreasuryYieldModel)

#     if trial == 2:
#         ois_quotes = {
#             "1D": 0.0525,
#             "1W": 0.0526,
#             "1M": 0.0528,
#             "3M": 0.053,
#             "6M": 0.0535,
#             "1Y": 0.054,
#             "2Y": 0.055,
#             "5Y": 0.057,
#             "10Y": 0.058,
#         }
#         today = ql.Date(28, 7, 2025)
#         settlement_days = 2
#         calendar = ql.UnitedStates(ql.UnitedStates.NYSE)

#         helpers = []
#         for tenor, rate in ois_quotes.items():
#             maturity = calendar.advance(today, ql.Period(tenor))
#             schedule = ql.Schedule(
#                 today,
#                 maturity,
#                 ql.Period("1Y"),
#                 calendar,
#                 ql.Unadjusted,
#                 ql.Unadjusted,
#                 ql.DateGeneration.Backward,
#                 False,
#             )
#             helper = ql.FixedRateBondHelper(
#                 ql.QuoteHandle(ql.SimpleQuote(100.0)),
#                 settlement_days,
#                 100.0,
#                 schedule,
#                 [rate],
#                 ql.Actual360(),
#             )
#             helpers.append(helper)

#         curve = ql.PiecewiseLinearZero(
#             today,
#             helpers,
#             ql.Actual360(),
#         )
#         curve.enableExtrapolation()
#         discount_handle = ql.YieldTermStructureHandle(curve)
#         sofr_index = ql.OvernightIndex(
#             "SOFR",
#             settlement_days,
#             ql.USDCurrency(),
#             calendar,
#             ql.Actual360(),
#             discount_handle,
#         )

#         tenor = ql.Period("10Y")
#         maturity = calendar.advance(today, tenor)
#         notional = 1e6

#         schedule = ql.Schedule(
#             today,
#             maturity,
#             ql.Period("1Y"),
#             calendar,
#             ql.ModifiedFollowing,
#             ql.ModifiedFollowing,
#             ql.DateGeneration.Forward,
#             False,
#         )

#         def build_swap(fixed_rate):
#             swap = ql.OvernightIndexedSwap(
#                 ql.OvernightIndexedSwap.Payer,
#                 notional,
#                 schedule,
#                 fixed_rate,
#                 ql.Actual360(),
#                 sofr_index,
#             )
#             engine = ql.DiscountingSwapEngine(discount_handle)
#             swap.setPricingEngine(engine)
#             return swap

#         def solve_par_fixed_rate():
#             def objective(rate):
#                 swap = build_swap(rate)
#                 return swap.NPV()

#             guess = 0.05
#             return optimize.brentq(
#                 objective,
#                 a=guess - 0.02,
#                 b=guess + 0.02,
#                 xtol=1e-6,
#             )

#         par_rate = solve_par_fixed_rate()
#         print(f"@@@ {par_rate:.6%}")


# if __name__ == "__main__":
#     asyncio.run(main())
#     asyncio.run(main())
#     asyncio.run(main())
