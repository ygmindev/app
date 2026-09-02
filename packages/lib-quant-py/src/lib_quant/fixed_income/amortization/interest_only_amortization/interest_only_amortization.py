from lib_quant.fixed_income.amortization.amortization.amortization import (
    Amortization,
)


class InterestOnlyAmortization(Amortization):
    def notionals(self) -> list[float]:
        n_periods = len(self.dates) - 1
        return [self.size] * n_periods
