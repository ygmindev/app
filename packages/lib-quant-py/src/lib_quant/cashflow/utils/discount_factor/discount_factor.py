import QuantLib as ql

from lib_quant.curve.curve.constants import Compounding
from lib_quant.datetime.constants import DayCount, Frequency


def _discount_factor(
    rate: float,
    t: float,
    compounding: Compounding = Compounding.COMPOUNDED,
    day_count: DayCount = DayCount.ACT_360,
    frequency: Frequency = Frequency.ANNUAL,
) -> float:
    return ql.InterestRate(
        rate,
        day_count.ql,
        compounding.ql,
        frequency.ql,
    ).discountFactor(t)


discount_factor = _discount_factor
