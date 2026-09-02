import datetime

from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field

from lib_quant.rates.benchmark.benchmark import Benchmark
from lib_quant.rates.rate.constants import RateType


class Rate(BaseModel):
    benchmark: Benchmark | None = None
    rate_type: RateType = RateType.FIXED
    spread: float = Field(default=0.0)
    floor: float | None = Field(default=None)
    cap: float | None = Field(default=None)
    gearing: float | None = Field(default=None)
    fixing_days: int | None = Field(default=None)

    def all_in_rate(
        self,
        as_of_date: datetime.date,
    ) -> float:
        if self.rate_type == RateType.FLOATING:
            if not self.benchmark:
                raise ValueError("missing benchmark for floating")
            # base = self.benchmark
            base = 0.0
            if self.floor is not None:
                base = max(base, self.floor)
            if self.cap is not None:
                base = min(base, self.cap)
            if self.gearing is not None:
                base *= self.gearing
            return base + self.spread
        return self.spread
