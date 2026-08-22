from datetime import datetime
from typing import Type

import QuantLib as ql
from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field
from lib_shared.core.utils.private_field.private_field import PrivateField

from lib_quant.curve.curve.constants import Compounding, InterpolationMethod
from lib_quant.datetime.utils.calendar.calendar import Calendar


class Curve(BaseModel):
    as_of_date: datetime
    calendar: Calendar = Field()
    interpolation: InterpolationMethod = Field(
        default=InterpolationMethod.PIECEWISE_LOG_CUBIC
    )
    is_initialized: bool = False

    _curve: ql.YieldTermStructure = PrivateField()
    _handle: ql.RelinkableYieldTermStructureHandle = PrivateField()

    @property
    def _interpolator(self) -> Type:
        match self.interpolation:
            case InterpolationMethod.LINEAR:
                return ql.Linear
            case InterpolationMethod.LOG_LINEAR:
                return ql.LogLinear
            case InterpolationMethod.PIECEWISE_LINEAR:
                return ql.PiecewiseLinearForward
            case InterpolationMethod.PIECEWISE_LOG_CUBIC:
                return ql.PiecewiseLogCubicDiscount
            case InterpolationMethod.PIECEWISE_SPLINE_CUBIC:
                return ql.PiecewiseSplineCubicDiscount
            case _:
                raise ValueError(f"Invalid interpolation: {self.interpolation}")

    @property
    def curve(self) -> ql.YieldTermStructure:
        if self._curve is None:
            raise ValueError("Curve is not initialized")
        return self._curve

    @curve.setter
    def curve(self, value: ql.YieldTermStructure) -> None:
        self._curve = value

    @property
    def handle(self) -> ql.RelinkableYieldTermStructureHandle:
        if self._handle is None:
            raise ValueError("Handle is not initialized")
        return self._handle

    @handle.setter
    def handle(self, value: ql.RelinkableYieldTermStructureHandle) -> None:
        self._handle = value

    def discount_factor(
        self,
        date: datetime,
    ) -> float:
        return self.curve.forwardRate(
            ql.Date(date.day, date.month, date.year),
        )

    def forward_rate(
        self,
        start: datetime,
        end: datetime,
        compounding: Compounding = Compounding.CONTINUOUS,
    ) -> float:
        return self.curve.forwardRate(
            ql.Date(start.day, start.month, start.year),
            ql.Date(end.day, end.month, end.year),
            self.calendar.day_count.to_ql(),
            compounding.to_ql(),
        )

    def zero_rate(
        self,
        date: datetime,
        compounding: Compounding = Compounding.CONTINUOUS,
    ) -> float:
        return self.curve.zeroRate(
            ql.Date(date.day, date.month, date.year),
            self.calendar.day_count.to_ql(),
            ql.Annual,
            compounding.to_ql(),
        )

    def shifted(self, bps: float) -> "Curve":
        shift = bps / 10000.0
        shifted_curve = ql.ZeroSpreadedTermStructure(
            self.handle,
            ql.QuoteHandle(ql.SimpleQuote(shift)),
            ql.Continuous,
        )
        result = Curve(
            as_of_date=self.as_of_date,
            calendar=self.calendar,
            interpolation=self.interpolation,
        )
        result.curve = shifted_curve
        result.handle = ql.RelinkableYieldTermStructureHandle(shifted_curve)
        return result
