from lib_shared.core.utils.field.field import Field

from lib_quant.deriv.option.option import Option
from lib_quant.fixed_income.credit.credit import Credit


class Bond(Credit):
    options: list[Option] = Field(default_factory=list)
