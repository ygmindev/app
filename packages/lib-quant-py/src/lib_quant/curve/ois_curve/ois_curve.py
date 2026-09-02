import QuantLib as ql

from lib_quant.curve.bootstrappable_curve.bootstrappable_curve import (
    BootstrappableCurve,
)
from lib_quant.pricing.utils.quote.swap_quote.swap_quote import SwapQuote
from lib_quant.rates.deposit.deposit import Deposit
from lib_quant.swap.ois.ois import Ois


class OisCurve(BootstrappableCurve[SwapQuote]):
    def _get_helper(
        self,
        quote: SwapQuote,
    ) -> ql.RateHelper:
        asset = quote.asset
        value = quote.value

        if asset is None:
            raise ValueError("OIS asset must not be None")
        if asset.tenor is None:
            raise ValueError("OIS asset must have a tenor")

        if type(asset) is Ois:
            return ql.OISRateHelper(
                self.calendar.settlement_days,
                asset.tenor.ql,
                ql.QuoteHandle(ql.SimpleQuote(value)),
                ql.Sofr(self.handle),
            )
        if type(asset) is Deposit:
            return ql.DepositRateHelper(
                ql.QuoteHandle(ql.SimpleQuote(value)),
                asset.tenor.ql,
                self.calendar.settlement_days,
                self.calendar.region,
                self.calendar.business_day_convention,
                True,
                self.calendar.day_count.ql,
            )
        raise ValueError("Unknown asset type")
