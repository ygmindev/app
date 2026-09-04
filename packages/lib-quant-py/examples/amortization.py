import asyncio
import datetime

import pandas as pd
from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.logger.logger import logger

from lib_quant.datetime.constants import Frequency
from lib_quant.datetime.utils.period.period import Period
from lib_quant.instruments.fixed_income.credit.bond.fixed_rate_bond.fixed_rate_bond import (
    FixedRateBond,
)
from lib_quant.instruments.fixed_income.credit.credit.constants import AmortizationType

pd.set_option("display.max_columns", None)


async def main() -> None:
    BaseModel.rebuild()

    bond = FixedRateBond(
        amortization_period=Period(years=6),
        amortization_type=AmortizationType.LEVEL_PAY,
        coupon=0.08,
        frequency=Frequency.ANNUAL,
        issue_date=datetime.date(2020, 1, 1),
        maturity_date=datetime.date(2023, 1, 1),
        pik_period=Period(years=1),
        pik_rate=0.5,
        size=1e6,
    )

    cashflows = bond.cashflows().df
    logger.info(cashflows)


if __name__ == "__main__":
    asyncio.run(main())
