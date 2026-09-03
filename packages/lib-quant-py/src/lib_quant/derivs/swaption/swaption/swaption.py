from lib_quant.core.asset.asset import Asset
from lib_quant.derivs.option.option import Option


class Swaption(Option):
    underlying: Asset
