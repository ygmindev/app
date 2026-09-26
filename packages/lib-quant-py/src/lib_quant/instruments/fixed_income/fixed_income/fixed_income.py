from lib_quant.rates.models.rate.rate import Rate
from lib_shared.core.utils.field.field import Field

from lib_quant.cashflow.models.cashflow_schedule.cashflow_schedule import (
    CashflowSchedule,
)
from lib_quant.core.models.base_instrument.base_instrument import BaseInstrument
from lib_quant.datetime.constants import Frequency


class FixedIncome(BaseInstrument):
    frequency: Frequency
    rate: Rate | None = Field(default=None)

    def cashflows(self) -> CashflowSchedule:
        raise NotImplementedError("Subclasses must implement this method")
