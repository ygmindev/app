import datetime

from lib_quant.core.models.base_instrument.base_instrument import BaseInstrument
from lib_quant.derivs.models.option.constants import ExerciseType, OptionType


class Option(BaseInstrument):
    underlying: BaseInstrument
    effective: datetime.date
    expiration: datetime.date
    option_type: OptionType
    strike: float
    exercise_type: ExerciseType = ExerciseType.EUROPEAN
