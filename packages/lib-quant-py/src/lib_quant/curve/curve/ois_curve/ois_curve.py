import QuantLib as ql

from lib_quant.curve.curve.bootstrappable_curve.bootstrappable_curve import (
    BootstrappableCurve,
)
from lib_quant.datetime.utils.period.period import Period
from lib_quant.pricing.utils.quote.quote import Quote
from lib_quant.rates.deposit.deposit import Deposit
from lib_quant.swap.ois.ois import Ois


class OisCurve(BootstrappableCurve):
    tenors: list[Period] = [
        Period(months=1),
        Period(months=2),
        Period(months=3),
        Period(months=6),
        Period(years=1),
        Period(years=2),
        Period(years=3),
        Period(years=5),
        Period(years=7),
        Period(years=10),
        Period(years=15),
        Period(years=20),
        Period(years=30),
        Period(years=40),
    ]

    def _get_helper(
        self,
        quote: Quote,
    ) -> ql.RateHelper:
        asset = quote.asset
        value = quote.value

        if type(asset) is Ois:
            return ql.OISRateHelper(
                self.calendar.settlement_days,
                asset.tenor.ql,
                ql.QuoteHandle(ql.SimpleQuote(value)),
                ql.Sofr(self.handle),
            )
        elif type(asset) is Deposit:
            return ql.DepositRateHelper(
                ql.QuoteHandle(ql.SimpleQuote(value)),
                asset.tenor.ql,
                self.calendar.settlement_days,
                self.calendar.region,
                self.calendar.business_day_convention,
                True,
                self.calendar.day_count.ql,
            )
        else:
            raise ValueError("Unknown asset type")
