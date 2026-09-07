import datetime

from lib_quant.features.prepayment.base_provision.base_provision import BaseProvision


class DefeasanceProvision(BaseProvision):
    def _is_prepayable(
        self,
        date: datetime.date,
    ) -> bool:
        return False

    def penalty(
        self,
        date: datetime.date,
        prepaid_principal: float,
    ) -> float:
        return 0.0
