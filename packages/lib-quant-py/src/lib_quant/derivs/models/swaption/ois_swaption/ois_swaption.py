from lib_quant.derivs.models.ois.ois import Ois
from lib_shared.core.utils.field.field import Field

from lib_quant.instrument.models.base_instrument.base_instrument import BaseInstrument
from lib_quant.derivs.models.swaption.swaption.swaption import Swaption


class OisSwaption(Swaption):
    underlying: BaseInstrument = Field(default_factory=lambda: Ois())
