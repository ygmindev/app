import QuantLib as ql

from lib_quant.curve.bootstrappable_curve.bootstrappable_curve import (
    BootstrappableCurve,
)
from lib_quant.instruments.fixed_income.credit.usd.us_treasury.us_treasury import USTreasury
from lib_quant.instruments.fixed_income.credit.usd.us_treasury_bill.us_treasury_bill import (
    USTreasuryBill,
)
from lib_quant.pricing.utils.quote.credit_quote.constants import CreditQuoteType
from lib_quant.pricing.utils.quote.credit_quote.credit_quote import (
    CreditQuote,
)


class TreasuryCurve(BootstrappableCurve[CreditQuote]):
    def _get_helper(
        self,
        quote: CreditQuote,
    ) -> ql.RateHelper:
        asset = quote.asset
        value = quote.value

        if type(asset) is USTreasury:
            match quote.quote_type:
                case CreditQuoteType.PRICE:
                    price = value
                case CreditQuoteType.YIELD:
                    price = asset.price_from_yield(value=value)
                case _:
                    raise ValueError(
                        f"Unsupported quote type {quote.quote_type} for USTreasury"
                    )
            dates = list(
                map(
                    lambda cf: ql.Date(cf.date.year, cf.date.month, cf.date.day),
                    asset.cashflows.events,
                )
            )
            return ql.FixedRateBondHelper(
                ql.QuoteHandle(ql.SimpleQuote(price)),
                self.calendar.settlement_days,
                100.0,
                dates,
                [asset.coupon],
                self.calendar.day_count.ql,
                self.calendar.business_day_convention,
                100.0,
            )

        if type(asset) is USTreasuryBill:
            if asset.tenor is None:
                raise ValueError("Tenor must be provided for USTreasuryBill")
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
