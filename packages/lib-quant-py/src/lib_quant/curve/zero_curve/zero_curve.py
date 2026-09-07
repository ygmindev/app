from typing import Sequence

import QuantLib as ql

from lib_quant.curve.curve.constants import Compounding
from lib_quant.curve.curve.curve import Curve
from lib_quant.datetime.utils.period.period import Period


class ZeroCurve(Curve):
    def initialize(
        self,
        tenors: Sequence[float | Period],
        rates: Sequence[float],
        compounding: Compounding = Compounding.COMPOUNDED,
    ) -> None:
        tenors = [
            self.calendar.year_fraction(self.calendar.advance(t))
            if isinstance(t, Period)
            else t
            for t in tenors
        ]
        pairs = sorted(zip(tenors, rates, strict=True), key=lambda x: x[0])
        tenors = [p[0] for p in pairs]
        rates = [p[1] for p in pairs]
        dates = [
            self.calendar.advance(Period(years=t), self.as_of_date) for t in tenors
        ]
        curve = ql.ZeroCurve(
            [ql.Date(d.day, d.month, d.year) for d in dates],
            rates,
            self.calendar.day_count.ql,
            compounding.ql,
            self.calendar.day_count.ql,
            self.calendar.region.ql,
            self.interpolation.ql,
            compounding.ql,
            ql.Annual,
        )
        curve.enableExtrapolation()
        self.curve = curve
        self.handle = ql.RelinkableYieldTermStructureHandle(curve)
        self.is_initialized = True
