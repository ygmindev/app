import asyncio

from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.logger.logger import logger

from lib_quant.curve.models.ois_curve.ois_curve import OisCurve
from lib_quant.datetime.models.period.period import Period
from lib_quant.derivs.models.swap.ois import Ois
from lib_quant.fixed_income.models.credit.bond.fixed_rate_bond.fixed_rate_bond import (
    FixedRateBond,
)
from lib_quant.pricing.models.quote.swap_quote.constants import SwapQuoteType
from lib_quant.pricing.models.quote.swap_quote.swap_quote import SwapQuote
from lib_quant.simulation.models.hullwhite_simulator import HullWhiteSimulator
from lib_quant.simulation.models.hullwhite_simulator.hullwhite_simulator import (
    HullWhiteParams,
    HullWhiteSimParams,
)


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
    bond = FixedRateBond(
        tenor=Period(years=10),
        coupon=0.05,
    )

    simulator = HullWhiteSimulator(
        params=HullWhiteParams(),
    )
    result = simulator.simulate(HullWhiteSimParams()).df
    logger.info(result)


if __name__ == "__main__":
    asyncio.run(main())
