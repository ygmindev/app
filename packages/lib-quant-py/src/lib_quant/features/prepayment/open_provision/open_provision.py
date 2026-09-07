import datetime

from lib_quant.features.prepayment.base_provision.base_provision import BaseProvision


class OpenProvision(BaseProvision):
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
        return 0.0
