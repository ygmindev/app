from lib_quant.core.models.base_instrument.base_instrument import BaseInstrument
from lib_quant.derivs.models.option.option import Option


class Swaption(Option):
    underlying: BaseInstrument
