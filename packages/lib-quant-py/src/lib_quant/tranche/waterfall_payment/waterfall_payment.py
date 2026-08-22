from lib_shared.core.utils.base_model.base_model import BaseModel


class WaterfallPayment(BaseModel):
    interest: dict[str, float]
    principal: dict[str, float]
    losses: dict[str, float]
    balance_end: dict[str, float]
