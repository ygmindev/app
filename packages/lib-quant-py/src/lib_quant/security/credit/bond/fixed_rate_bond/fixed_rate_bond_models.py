import datetime

from lib_quant.date.constants import FREQUENCY
from lib_quant.security.credit.bond.bond_models import BondModel


class FixedRateBondModel(BondModel):
    """ Bond with fixed rate coupon. """
    coupon: float
    coupon_frequency: FREQUENCY = FREQUENCY.SEMI_ANNUAL
    maturity_date: datetime.date
