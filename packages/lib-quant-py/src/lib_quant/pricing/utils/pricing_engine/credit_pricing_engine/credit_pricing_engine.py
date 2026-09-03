from lib_quant.curve.benchmark_yield_curve.benchmark_yield_curve import (
    BenchmarkYieldCurve,
)
from lib_quant.curve.bootstrappable_curve.bootstrappable_curve import (
    BootstrappableCurve,
)
from lib_quant.instruments.fixed_income.credit.credit.credit import Credit
from lib_quant.pricing.utils.pricing_engine.pricing_engine.pricing_engine import (
    PricingEngine,
)
from lib_quant.pricing.utils.quote.credit_quote.constants import CreditQuoteType
from lib_quant.pricing.utils.quote.credit_quote.credit_quote import CreditQuote


class CreditPricingEngine(PricingEngine):
    swap_curve: BootstrappableCurve
    benchmark_yield_curve: BenchmarkYieldCurve

    def _benchmark_yield(
        self,
        security: Credit,
    ) -> float:
        if security.maturity_date is None:
            raise ValueError("missing maturity date for security")
        tenor = self.calendar.year_fraction(security.maturity_date)
        closest_idx = min(
            range(len(self.benchmark_yield_curve.tenors)),
            key=lambda x: abs((self.benchmark_yield_curve.tenors[x] - tenor)),
        )
        closest = self.benchmark_yield_curve.rates[closest_idx]
        return closest

    def _benchmark_yield_interpolated(
        self,
        security: Credit,
    ) -> float:
        if security.maturity_date is None:
            raise ValueError("missing maturity date for security")
        return self.benchmark_yield_curve.par_yield(security.maturity_date)

    def convert(
        self,
        from_quote: CreditQuote,
        target_type: CreditQuoteType,
    ) -> CreditQuote:
        if target_type == from_quote.quote_type:
            return from_quote

        asset = from_quote.asset
        value = from_quote.value
        if asset is None:
            raise ValueError("Cannot convert quote without asset")

        match from_quote.quote_type:
            case CreditQuoteType.PRICE:
                match target_type:
                    case CreditQuoteType.YIELD:
                        value = asset.yield_from_price(value)
                    case CreditQuoteType.T_SPREAD:
                        yld = asset.yield_from_price(value)
                        benchmark_yld = self._benchmark_yield(asset)
                        value = yld - benchmark_yld
                    case CreditQuoteType.G_SPREAD:
                        yld = asset.yield_from_price(value)
                        benchmark_yld = self._benchmark_yield_interpolated(asset)
                        value = yld - benchmark_yld
                    case CreditQuoteType.Z_SPREAD:
                        value = asset.zspread_from_price(value, self.swap_curve)
                    case _:
                        value = None
            case CreditQuoteType.YIELD:
                match target_type:
                    case CreditQuoteType.PRICE:
                        value = asset.price_from_yield(value)
                    case CreditQuoteType.T_SPREAD:
                        benchmark_yld = self._benchmark_yield(asset)
                        value = value - benchmark_yld
                    case CreditQuoteType.G_SPREAD:
                        benchmark_yld = self._benchmark_yield_interpolated(asset)
                        value = value - benchmark_yld
                    case CreditQuoteType.Z_SPREAD:
                        prc = asset.price_from_zspread(value, self.swap_curve)
                        value = asset.zspread_from_price(prc, self.swap_curve)
                    case _:
                        value = None
            case CreditQuoteType.T_SPREAD:
                yld = value + self._benchmark_yield(asset)
                match target_type:
                    case CreditQuoteType.PRICE:
                        value = asset.price_from_yield(value=yld)
                    case CreditQuoteType.YIELD:
                        value = yld
                    case CreditQuoteType.G_SPREAD:
                        value = yld - self._benchmark_yield_interpolated(asset)
                    case CreditQuoteType.Z_SPREAD:
                        prc = asset.price_from_yield(yld)
                        value = asset.zspread_from_price(prc, self.swap_curve)
                    case _:
                        value = None
            case CreditQuoteType.G_SPREAD:
                yld = value + self._benchmark_yield_interpolated(asset)
                match target_type:
                    case CreditQuoteType.PRICE:
                        value = asset.price_from_yield(value=yld)
                    case CreditQuoteType.YIELD:
                        value = yld
                    case CreditQuoteType.T_SPREAD:
                        value = yld - self._benchmark_yield(asset)
                    case CreditQuoteType.Z_SPREAD:
                        prc = asset.price_from_yield(yld)
                        value = asset.zspread_from_price(prc, self.swap_curve)
                    case _:
                        value = None
            case CreditQuoteType.Z_SPREAD:
                prc = asset.price_from_zspread(value, self.swap_curve)
                match target_type:
                    case CreditQuoteType.PRICE:
                        value = prc
                    case CreditQuoteType.YIELD:
                        value = asset.yield_from_price(prc)
                    case CreditQuoteType.T_SPREAD:
                        yld = asset.yield_from_price(prc)
                        value = yld - self._benchmark_yield(asset)
                    case CreditQuoteType.G_SPREAD:
                        yld = asset.yield_from_price(prc)
                        value = yld - self._benchmark_yield_interpolated(asset)
                    case _:
                        value = None

        if value is None:
            raise ValueError(
                f"Cannot convert from {from_quote.quote_type} to {target_type}"
            )

        return from_quote.clone(
            value=value,
            quote_type=target_type,
        )
