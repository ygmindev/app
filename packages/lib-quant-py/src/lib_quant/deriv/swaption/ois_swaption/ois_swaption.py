from lib_shared.core.utils.field.field import Field

from lib_quant.core.asset.asset import Asset
from lib_quant.deriv.swaption.swaption import Swaption
from lib_quant.swap.ois.ois import Ois


class OisSwaption(Swaption):
    underlying: Asset = Field(default_factory=lambda: Ois())
