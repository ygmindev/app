from lib_shared.core.utils.base_model.base_model import BaseModel

from lib_quant.rates.benchmark.benchmark import Benchmark
from lib_quant.rates.rate.constants import RateType


class Rate(BaseModel):
    benchmark: Benchmark | None = None
    rate_type: RateType = RateType.FIXED
    spread: float = 0.0
    floor: float = 0.0

    @property
    def all_in_rate(self) -> float:
        if self.rate_type == RateType.FLOATING:
            if not self.benchmark:
                raise ValueError("missing benchmark for floating")
            base = max(self.benchmark, self.floor)
            return base + self.spread
        return self.spread
