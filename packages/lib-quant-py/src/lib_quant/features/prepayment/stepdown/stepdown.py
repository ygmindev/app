from typing import Sequence

from lib_shared.core.utils.field.field import Field

from lib_quant.features.prepayment.prepayment.prepayment import Prepayment


class Stepdown(Prepayment):
    stepdown_schedule: Sequence[tuple] = Field(default_factory=list)
