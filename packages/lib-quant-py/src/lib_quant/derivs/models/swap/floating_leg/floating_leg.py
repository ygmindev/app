from lib_quant.derivs.models.swap_leg.swap_leg import SwapLeg

from lib_quant.rates.models.benchmark.benchmark import Benchmark


class FloatingLeg(SwapLeg):
    index: Benchmark
