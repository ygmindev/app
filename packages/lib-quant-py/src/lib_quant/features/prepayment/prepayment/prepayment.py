from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field

from lib_quant.datetime.utils.period.period import Period


class Prepayment(BaseModel):
    lockout_period: Period | None = Field(default=None)
