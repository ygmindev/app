from pydantic import BaseModel

from lib_quant.date.utils.date_convention import DateConvention
from lib_quant.pricing.utils.bond_price import BondPrice
from lib_quant.security.credit.bond.fixed_rate_bond import FixedRateBond


class BondQuoteModel(BaseModel):
    date_convention: DateConvention = DateConvention()
    price: BondPrice | None = BondPrice(value=100.0)
    security: FixedRateBond
