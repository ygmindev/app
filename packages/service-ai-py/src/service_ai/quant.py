import datetime

from lib_quant.date.constants import FREQUENCY
from lib_quant.pricing.utils.bond_price import BondPrice
from lib_quant.security.credit.bond.fixed_rate_bond import FixedRateBond

bond = FixedRateBond(
    issue_date=datetime.date(2022, 1, 1),
    maturity_date=datetime.date(2030, 1, 1),
    coupon_frequency=FREQUENCY.ANNUAL,
    coupon=0.05,
    face_value=100,
    settlement_days=2,
)

yld = bond.yield_from_price(
    price=BondPrice(value=100.0),
    as_of_date=datetime.date.today(),
)

print(yld)
