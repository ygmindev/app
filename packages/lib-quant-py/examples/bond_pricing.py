import asyncio

from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.logger.logger import logger

from lib_quant.curve.benchmark_yield_curve.benchmark_yield_curve import (
    BenchmarkYieldCurve,
)
from lib_quant.curve.ois_curve.ois_curve import OisCurve
from lib_quant.datetime.utils.period.period import Period
from lib_quant.instruments.fixed_income.credit.bond.fixed_rate_bond.fixed_rate_bond import (
    FixedRateBond,
)
from lib_quant.instruments.fixed_income.credit.bond.floating_rate_bond.floating_rate_bond import (
    FloatingRateBond,
)
from lib_quant.instruments.fixed_income.credit.credit.constants import AmortizationType
from lib_quant.pricing.utils.pricing_engine.credit_pricing_engine.credit_pricing_engine import (
    CreditPricingEngine,
)
from lib_quant.pricing.utils.quote.credit_quote.constants import CreditQuoteType
from lib_quant.pricing.utils.quote.credit_quote.credit_quote import CreditQuote
from lib_quant.pricing.utils.quote.swap_quote.constants import SwapQuoteType
from lib_quant.pricing.utils.quote.swap_quote.swap_quote import SwapQuote
from lib_quant.rates.daily_sofr.daily_sofr import DailySofr
from lib_quant.rates.rate.rate import Rate
from lib_quant.swap.ois.ois import Ois


async def main() -> None:
    BaseModel.rebuild()

    ois_curve = OisCurve()
    ois_curve.fit(
        quotes=[
            SwapQuote(
                asset=Ois(tenor=Period(years=1)),
                quote_type=SwapQuoteType.YIELD,
                value=0.01,
            ),
            SwapQuote(
                asset=Ois(tenor=Period(years=40)),
                quote_type=SwapQuoteType.YIELD,
                value=0.10,
            ),
        ]
    )
    benchmark_yield_curve = BenchmarkYieldCurve()
    benchmark_yield_curve.fit(
        tenors=[Period(years=1), Period(years=40)],
        rates=[0.01, 0.10],
    )
    bond = FixedRateBond(
        tenor=Period(years=10),
        coupon=0.05,
        amortization_type=AmortizationType.INTEREST_ONLY,
    )
    bond = FloatingRateBond(
        tenor=Period(years=10),
        rate=Rate(
            benchmark=DailySofr(curve=ois_curve),
            spread=0.05,
        ),
        curve=ois_curve,
    )
    logger.info("\n\n\n@@@@ cashflows")
    logger.info(bond.cashflows().df)
    logger.info("\n\n\n@@@@")

    pe = CreditPricingEngine(
        swap_curve=ois_curve,
        benchmark_yield_curve=benchmark_yield_curve,
    )

    quote = CreditQuote(
        asset=bond,
        quote_type=CreditQuoteType.YIELD,
        value=0.05,
    )

    result = pe.convert(quote, CreditQuoteType.PRICE)
    logger.info("\n\n\n@@@@ PRICING")
    logger.info(result)
    logger.info("\n\n\n@@@@")


if __name__ == "__main__":
    asyncio.run(main())
