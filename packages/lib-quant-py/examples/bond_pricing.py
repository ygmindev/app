import asyncio
import datetime

from lib_shared.core.utils.base_model.base_model import BaseModel

from lib_quant.curve.benchmark_yield_curve.benchmark_yield_curve import (
    BenchmarkYieldCurve,
)
from lib_quant.curve.ois_curve.ois_curve import OisCurve
from lib_quant.datetime.utils.period.period import Period
from lib_quant.instruments.fixed_income.credit.bond.fixed_rate_bond.fixed_rate_bond import (
    FixedRateBond,
)
from lib_quant.pricing.utils.pricing_engine.credit_pricing_engine.credit_pricing_engine import (
    CreditPricingEngine,
)
from lib_quant.pricing.utils.quote.credit_quote.constants import CreditQuoteType
from lib_quant.pricing.utils.quote.credit_quote.credit_quote import CreditQuote
from lib_quant.pricing.utils.quote.swap_quote.constants import SwapQuoteType
from lib_quant.pricing.utils.quote.swap_quote.swap_quote import SwapQuote
from lib_quant.swap.ois.ois import Ois

# as of 9/4/2026
OIS_QUOTES = [
    SwapQuote(
        asset=Ois(tenor=Period(months=1)),
        quote_type=SwapQuoteType.YIELD,
        value=0.0374,
    ),
    SwapQuote(
        asset=Ois(tenor=Period(months=3)),
        quote_type=SwapQuoteType.YIELD,
        value=0.0381,
    ),
    SwapQuote(
        asset=Ois(tenor=Period(months=6)),
        quote_type=SwapQuoteType.YIELD,
        value=0.0394,
    ),
    SwapQuote(
        asset=Ois(tenor=Period(years=1)),
        quote_type=SwapQuoteType.YIELD,
        value=0.0412,
    ),
    SwapQuote(
        asset=Ois(tenor=Period(years=2)),
        quote_type=SwapQuoteType.YIELD,
        value=0.0420,
    ),
    SwapQuote(
        asset=Ois(tenor=Period(years=10)),
        quote_type=SwapQuoteType.YIELD,
        value=0.0439,
    ),
    SwapQuote(
        asset=Ois(tenor=Period(years=30)),
        quote_type=SwapQuoteType.YIELD,
        value=0.0457,
    ),
]

UST_QUOTES = [
    [
        Period(years=2),
        Period(years=3),
        Period(years=5),
        Period(years=7),
        Period(years=10),
        Period(years=30),
    ],
    [
        0.0437,
        0.0445,
        0.0454,
        0.0465,
        0.0478,
        0.0523,
    ],
]


async def main() -> None:
    BaseModel.rebuild()

    ois_curve = OisCurve()
    ois_curve.fit(quotes=OIS_QUOTES)
    benchmark_yield_curve = BenchmarkYieldCurve()
    benchmark_yield_curve.fit(
        tenors=UST_QUOTES[0],
        rates=UST_QUOTES[1],
    )
    bond = FixedRateBond(
        issue_date=datetime.date(2025, 5, 12),
        maturity_date=datetime.date(2035, 5, 12),
        coupon=0.0475,
    )
    # bond = FloatingRateBond(
    #     tenor=Period(years=10),
    #     rate=Rate(
    #         benchmark=DailySofr(curve=ois_curve),
    #         spread=0.06,
    #     ),
    #     curve=ois_curve,
    # )

    pe = CreditPricingEngine(
        swap_curve=ois_curve,
        benchmark_yield_curve=benchmark_yield_curve,
    )

    quote = CreditQuote(
        asset=bond,
        # quote_type=CreditQuoteType.PRICE,
        # value=98.46,
        quote_type=CreditQuoteType.YIELD,
        value=0.0503,
    )

    print(f"\n\nACCRUED: {bond.accrued_interest()}")
    print(f"PRICE: {pe.convert(quote, CreditQuoteType.PRICE).value}")
    print(f"YIELD: {pe.convert(quote, CreditQuoteType.YIELD).value * 1e2}")
    print(f"TSPREAD: {pe.convert(quote, CreditQuoteType.T_SPREAD).value * 1e4}")
    print(f"GSPREAD: {pe.convert(quote, CreditQuoteType.G_SPREAD).value * 1e4}")
    print(f"ZSPREAD: {pe.convert(quote, CreditQuoteType.Z_SPREAD).value * 1e4}")


if __name__ == "__main__":
    asyncio.run(main())
