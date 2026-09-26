from lib_quant.derivs.models.swap_leg.swap_leg import SwapLeg

from lib_quant.instrument.models.base_instrument.base_instrument import BaseInstrument


class Swap(BaseInstrument):
    pay_leg: SwapLeg
    receive_leg: SwapLeg
