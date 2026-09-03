from typing import TypeVar

import QuantLib as ql

from lib_quant.instruments.fixed_income.credit.fixed_rate_credit.fixed_rate_credit import (
    FixedRateCredit,
)

TType = TypeVar("TType", bound=ql.Bond)


class FixedRateBond(FixedRateCredit): ...
