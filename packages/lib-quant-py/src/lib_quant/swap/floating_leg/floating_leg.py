from lib_quant.rates.benchmark.benchmark import Benchmark
from lib_quant.swap.swap_leg.swap_leg import SwapLeg


class FloatingLeg(SwapLeg):
    index: Benchmark
