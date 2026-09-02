import numpy as np

from lib_quant.fixed_income.amortization.amortization.amortization import (
    Amortization,
)


class StraightLineAmortization(Amortization):
    def notionals(self) -> list[float]:
        n_periods = len(self.dates) - 1
        step = self.size / n_periods
        return np.linspace(self.size, step, n_periods).tolist()
