from typing import Self

import QuantLib as ql
from lib_shared.core.utils.private_field.private_field import PrivateField

from lib_quant.curve.curve.curve import Curve


class FlatCurve(Curve):
    rate: float

    _curve: ql.YieldTermStructure = PrivateField()

    def post_init(self) -> None:
        super().post_init()
        as_of_date = self.calendar.as_of_date
        self._curve = ql.FlatForward(
            ql.Date(
                as_of_date.day,
                as_of_date.month,
                as_of_date.year,
            ),
            self.rate,
            self.calendar.day_count.ql,
        )
        self.is_initialized = True

    @property
    def curve(self) -> ql.YieldTermStructure:
        if self._curve is None:
            raise ValueError("Curve is not initialized")
        return self._curve

    @curve.setter
    def curve(self, value: ql.YieldTermStructure) -> None:
        self._curve = value

    def shifted(
        self,
        bps: float,
    ) -> Self:
        shift = bps / 10000.0
        result = type(self)(
            calendar=self.calendar,
            is_initialized=self.is_initialized,
            rate=self.rate + shift,
        )
        return result
