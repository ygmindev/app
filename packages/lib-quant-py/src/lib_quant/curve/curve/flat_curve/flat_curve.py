import QuantLib as ql

from lib_quant.curve.curve.curve import Curve


class FlatCurve(Curve):
    rate: float

    def post_init(self) -> None:
        super().post_init()
        today = ql.Date(
            self.as_of_date.day,
            self.as_of_date.month,
            self.as_of_date.year,
        )
        self._curve = ql.FlatForward(
            today,
            self.rate,
            self.calendar.day_count.ql,
        )
        self._handle = ql.RelinkableYieldTermStructureHandle(self._curve)
        self.is_initialized = True
