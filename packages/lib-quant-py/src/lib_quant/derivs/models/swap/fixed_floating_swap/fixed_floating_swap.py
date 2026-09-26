from lib_quant.derivs.models.fixed_leg.fixed_leg import FixedLeg
from lib_quant.derivs.models.floating_leg.floating_leg import FloatingLeg
from lib_quant.derivs.models.swap.swap import Swap


class FixedFloatingSwap(Swap):
    pay_leg: FixedLeg
    receive_leg: FloatingLeg
