from lib_quant.core.asset.asset import Asset
from lib_quant.swap.swap_leg.swap_leg import SwapLeg


class Swap(Asset):
    pay_leg: SwapLeg
    receive_leg: SwapLeg
