from typing import Generic, TypeVar

import QuantLib as ql
from lib_shared.core.utils.field.field import Field
from lib_shared.core.utils.private_field.private_field import PrivateField

from lib_quant.deriv.option.option import Option
from lib_quant.fixed_income.credit.credit import Credit

TType = TypeVar("TType", bound=ql.Bond)


class Bond(
    Credit,
    Generic[TType],
):
    options: list[Option] = Field(default_factory=list)
    _security: TType = PrivateField()

    @property
    def ql(self) -> TType:
        return self._security
