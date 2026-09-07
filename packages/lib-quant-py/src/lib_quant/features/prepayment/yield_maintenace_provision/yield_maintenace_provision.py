import datetime
from typing import Callable

from lib_shared.core.utils.field.field import Field

from lib_quant.cashflow.cashflow_schedule.cashflow_schedule import CashflowSchedule
from lib_quant.curve.curve.constants import Compounding
from lib_quant.datetime.constants import Frequency
from lib_quant.features.prepayment.base_provision.base_provision import BaseProvision


class YieldMaintenanceProvision(BaseProvision):
    rate: Callable[[datetime.date], float]

    _cashflows_remaining: CashflowSchedule | None = Field(default=None)
    _frequency: Frequency | None = Field(default=None)

    def _is_prepayable(
        self,
        date: datetime.date,
    ) -> bool:
        return True

    def penalty(
        self,
        date: datetime.date,
        prepaid_principal: float,
    ) -> float:
        if self._cashflows is None or self._frequency is None:
            raise RuntimeError("YieldMaintenanceProvision must be bind()'d before use")

        events = [e for e in self._cashflows.events if e.date > date]
        if not events:
            return 0.0

        remaining = self._cashflows.clone(events=events)
        npv = remaining.npv(
            as_of_date=date,
            rate=self.rate,
            compounding=Compounding.COMPOUNDED,
            frequency=self._frequency,
        )

        return max(0.0, npv - prepaid_principal)
