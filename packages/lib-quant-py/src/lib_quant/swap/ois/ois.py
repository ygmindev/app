from lib_shared.core.utils.field.field import Field

from lib_quant.datetime.constants import DayCount, Frequency
from lib_quant.datetime.utils.calendar.calendar import Calendar
from lib_quant.rates.daily_sofr.daily_sofr import DailySofr
from lib_quant.swap.fixed_floating_swap.fixed_floating_swap import FixedFloatingSwap
from lib_quant.swap.fixed_leg.fixed_leg import FixedLeg
from lib_quant.swap.floating_leg.floating_leg import FloatingLeg


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
