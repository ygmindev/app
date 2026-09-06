from typing import Sequence

from lib_shared.core.utils.field.field import Field

from lib_quant.features.prepayment.base_prepayment.base_prepayment import BasePrepayment


class Stepdown(BasePrepayment):
    stepdown_schedule: Sequence[tuple] = Field(default_factory=list)
