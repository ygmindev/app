from lib_quant.rates.rate.rate import Rate
from lib_quant.swap.swap_leg.swap_leg import SwapLeg


class FloatingLeg(SwapLeg):
    index: Rate
