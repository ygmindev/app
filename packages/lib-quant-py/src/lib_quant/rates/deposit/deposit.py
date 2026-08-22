from lib_quant.datetime.utils.period.period import Period
from lib_quant.rates.benchmark.benchmark import Benchmark


class Deposit(Benchmark):
    tenor: Period = Period(days=1)

    @property
    def description(self) -> str:
        return "Deposit"
