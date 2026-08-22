from lib_quant.core.asset.asset import Asset
from lib_quant.deriv.option.option import Option


class Swaption(Option):
    underlying: Asset
