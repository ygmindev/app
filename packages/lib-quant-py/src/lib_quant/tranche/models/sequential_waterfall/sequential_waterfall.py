from lib_shared.core.utils.base_model.base_model import BaseModel

from lib_quant.tranche.tranche.tranche import Tranche
from lib_quant.tranche.waterfall_payment.waterfall_payment import WaterfallPayment


class SequentialWaterfall(BaseModel):
    tranches: list[Tranche]

    def run(
        self,
        pool_interest: list[float],
        pool_principal: list[float],
        pool_loss: list[float],
    ) -> list[WaterfallPayment]:
        n = len(pool_interest)
        results: list[WaterfallPayment] = []

        for i in range(n):
            interest_available = pool_interest[i]
            principal_available = pool_principal[i]
            loss_period = pool_loss[i]

            interest_paid: dict[str, float] = {}
            principal_paid: dict[str, float] = {}
            loss_paid: dict[str, float] = {}

            for t in self.tranches:
                accrued = t.accrued_interest()
