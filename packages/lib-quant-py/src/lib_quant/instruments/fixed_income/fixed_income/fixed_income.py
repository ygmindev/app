from lib_quant.cashflow.cashflow.cashflow import Cashflow
from lib_quant.core.asset.asset import Asset
from lib_quant.datetime.constants import Frequency
from lib_quant.rates.rate.rate import Rate


class FixedIncome(Asset):
    frequency: Frequency
    rate: Rate

    @property
    def cashflows(self) -> Cashflow:
        raise NotImplementedError("Subclasses must implement this method")
