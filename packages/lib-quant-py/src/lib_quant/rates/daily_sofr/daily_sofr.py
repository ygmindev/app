from typing import Any

import QuantLib as ql
from lib_shared.core.utils.private_field.private_field import PrivateField

from lib_quant.curve.bootstrappable_curve.bootstrappable_curve import (
    BootstrappableCurve,
)
from lib_quant.datetime.utils.period.period import Period
from lib_quant.rates.benchmark.benchmark import Benchmark


class DailySofr(Benchmark):
    tenor: Period = Period(days=1)
    currency: str = "USD"
    curve: BootstrappableCurve | None = None

    _index: "ql.Sofr" = PrivateField()

    def model_post_init(self, __context: Any) -> None:
        super().model_post_init(__context)
        if self.curve:
            self._index = ql.Sofr(self.curve.handle)
        else:
            self._index = ql.Sofr()

    @property
    def description(self) -> str:
        return "SOFR 1D"

    @property
    def ql(self) -> ql.Sofr:
        return self._index
