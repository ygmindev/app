from lib_shared.core.utils.field.field import Field

from lib_quant.core.asset.asset import Asset
from lib_quant.deriv.option.option import Option
from lib_quant.swap.ois.ois import Ois


class OisSwaption(Option):
    underlying: Asset = Field(default_value=lambda: Ois())
