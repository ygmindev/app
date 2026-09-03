import datetime

from lib_quant.core.asset.asset import Asset
from lib_quant.derivs.option.constants import ExerciseType, OptionType


class Option(Asset):
    underlying: Asset
    effective: datetime.date
    expiration: datetime.date
    option_type: OptionType
    strike: float
    exercise_type: ExerciseType = ExerciseType.EUROPEAN
