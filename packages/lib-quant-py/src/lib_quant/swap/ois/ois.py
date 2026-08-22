from lib_quant.datetime.constants import Frequency
from lib_quant.datetime.utils.calendar.calendar import Calendar
from lib_quant.datetime.utils.day_count.day_count import DayCount
from lib_quant.datetime.utils.period.period import Period
from lib_quant.rates.daily_sofr.daily_sofr import DailySofr
from lib_quant.swap.fixed_floating_swap.fixed_floating_swap import FixedFloatingSwap
from lib_quant.swap.fixed_leg.fixed_leg import FixedLeg
from lib_quant.swap.floating_leg.floating_leg import FloatingLeg


class Ois(FixedFloatingSwap):
    tenor: Period
    pay_leg: FixedLeg = FixedLeg(
        frequency=Frequency.SEMI_ANNUAL,
        calendar=Calendar(day_count=DayCount.THIRTY_360),
    )
    receive_leg: FloatingLeg = FloatingLeg(
        frequency=Frequency.SEMI_ANNUAL,
        calendar=Calendar(day_count=DayCount.ACT_360),
        index=DailySofr(),
    )
