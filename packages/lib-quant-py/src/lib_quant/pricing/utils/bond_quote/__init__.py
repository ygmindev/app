import datetime

from lib_quant.pricing.utils.bond_price import BondPrice
from lib_quant.pricing.utils.bond_quote.bond_quote_models import BondQuoteModel


class BondQuote(BondQuoteModel):
    def yield_to_maturity(self) -> float:
        if self.price is None:
            raise ValueError("Bond quote price is not available")
        yld = self.security.yield_from_price(
            price=BondPrice(value=100.0),
            as_of_date=datetime.date.today(),
        )
        return yld
