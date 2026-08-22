import QuantLib as ql

from lib_quant.curve.curve.curve import Curve
from lib_quant.datetime.utils.period.period import Period
from lib_quant.rates.benchmark.benchmark import Benchmark


class DailySofr(Benchmark):
    tenor: Period = Period(days=1)
    currency: str = "USD"
    curve: Curve | None = None

    def post_init(self) -> None:
        super().post_init()
        if self.curve:
            self._curve = ql.Sofr(self.curve.curve)
        else:
            self._curve = ql.Sofr()

    @property
    def description(self) -> str:
        return "SOFR 1D"
