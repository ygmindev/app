from lib_quant.swap.fixed_leg.fixed_leg import FixedLeg
from lib_quant.swap.floating_leg.floating_leg import FloatingLeg
from lib_quant.swap.swap.swap import Swap


class FixedFloatingSwap(Swap):
    pay_leg: FixedLeg
    receive_leg: FloatingLeg
