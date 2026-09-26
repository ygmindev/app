from lib_quant.rates.models.benchmark.benchmark import Benchmark

from lib_quant.datetime.models.period.period import Period


class Deposit(Benchmark):
    tenor: Period = Period(days=1)

    @property
    def description(self) -> str:
        return "Deposit"
