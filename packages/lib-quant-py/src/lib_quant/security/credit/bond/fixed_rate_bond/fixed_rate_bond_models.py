import datetime

from lib_quant.date.constants import Frequency
from lib_quant.security.credit.bond.bond_models import BondModel


class FixedRateBondModel(BondModel):
    """Bond with fixed rate coupon."""

    coupon: float
    coupon_frequency: Frequency = Frequency.SEMI_ANNUAL
    maturity_date: datetime.date
