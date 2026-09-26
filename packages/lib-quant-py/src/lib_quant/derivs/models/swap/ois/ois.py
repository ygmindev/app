from lib_quant.derivs.models.fixed_floating_swap.fixed_floating_swap import (
    FixedFloatingSwap,
)
from lib_quant.derivs.models.fixed_leg.fixed_leg import FixedLeg
from lib_quant.derivs.models.floating_leg.floating_leg import FloatingLeg
from lib_shared.core.utils.field.field import Field

from lib_quant.datetime.constants import DayCount, Frequency
from lib_quant.datetime.models.calendar.calendar import Calendar
from lib_quant.rates.models.daily_sofr.daily_sofr import DailySofr


class Ois(FixedFloatingSwap):
    pay_leg: FixedLeg = Field(
        default_factory=lambda: FixedLeg(
            frequency=Frequency.SEMI_ANNUAL,
            calendar=Calendar(day_count=DayCount.THIRTY_360),
        )
    )
    receive_leg: FloatingLeg = Field(
        default_factory=lambda: FloatingLeg(
            frequency=Frequency.SEMI_ANNUAL,
            calendar=Calendar(day_count=DayCount.ACT_360),
            index=DailySofr(),
        )
    )
