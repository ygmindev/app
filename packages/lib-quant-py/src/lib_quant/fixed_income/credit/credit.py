from lib_quant.curve.bootstrappable_curve.bootstrappable_curve import (
    BootstrappableCurve,
)
from lib_quant.fixed_income.fixed_income.fixed_income import FixedIncome


class Credit(FixedIncome):
    def yield_from_price(
        self,
        value: float,
    ) -> float:
        raise NotImplementedError(
            "yield_from_price method must be implemented in subclasses"
        )

    def price_from_yield(
        self,
        value: float,
    ) -> float:
        raise NotImplementedError(
            "price_from_yield method must be implemented in subclasses"
        )

    def price_from_zspread(
        self,
        value: float,
        curve: BootstrappableCurve,
    ) -> float:
        raise NotImplementedError(
            "price_from_zspread method must be implemented in subclasses"
        )

    def zspread_from_price(
        self,
        value: float,
        curve: BootstrappableCurve,
    ) -> float:
        raise NotImplementedError(
            "zspread_from_price method must be implemented in subclasses"
        )
