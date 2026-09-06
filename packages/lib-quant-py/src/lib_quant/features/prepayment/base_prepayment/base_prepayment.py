import datetime

from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field

from lib_quant.datetime.utils.period.period import Period


class BasePrepayment(BaseModel):
    lockout_period: Period | None = Field(default=None)
    end_period: Period

    @property
    def is_prepayable(self) -> bool:
        raise NotImplementedError("Subclasses must implement the is_prepayable")

    def penalty(
        self,
        period_index: int,
        date: datetime.date,
        prepaid_principal: float,
    ) -> float:
        raise NotImplementedError("Subclasses must implement the penalty method")
