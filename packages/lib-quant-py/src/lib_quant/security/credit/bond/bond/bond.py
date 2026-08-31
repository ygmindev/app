from lib_shared.core.utils.field.field import Field

from lib_quant.deriv.option.option import Option
from lib_quant.fixed_income.fixed_income.fixed_income import FixedIncome


class Bond(FixedIncome):
    options: list[Option] = Field(default_factory=list)
