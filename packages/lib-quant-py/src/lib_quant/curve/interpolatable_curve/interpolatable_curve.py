import datetime
from typing import Callable, Self, Sequence

import numpy as np
from lib_shared.core.utils.field.field import Field
from lib_shared.core.utils.private_field.private_field import PrivateField
from scipy.interpolate import CubicSpline, interp1d

from lib_quant.curve.curve.curve import Curve
from lib_quant.curve.interpolatable_curve.constants import InterpolationMethod
from lib_quant.datetime.utils.period.period import Period


class InterpolatableCurve(Curve):
    interpolation: InterpolationMethod = Field(
        default=InterpolationMethod.PIECEWISE_LINEAR
    )
    _curve: Callable[[float], float] = PrivateField()
    _tenors: Sequence[float] = PrivateField()
    _rates: Sequence[float] = PrivateField()

    @property
    def tenors(self) -> Sequence[float]:
        return self._tenors

    @tenors.setter
    def tenors(self, value: Sequence[float]) -> None:
        self._tenors = value

    @property
    def rates(self) -> Sequence[float]:
        return self._rates

    @rates.setter
    def rates(self, value: Sequence[float]) -> None:
        self._rates = value

    def _tenor_to_float(
        self,
        tenor: float | Period | datetime.date,
    ) -> float:
        if isinstance(tenor, datetime.date):
            return self.calendar.year_fraction(tenor)
        elif isinstance(tenor, Period):
            return self.calendar.year_fraction(self.calendar.advance(tenor))
        else:
            return tenor

    def fit(
        self,
        tenors: Sequence[float | Period | datetime.date],
        rates: Sequence[float],
    ) -> None:
        tenor_values = list(map(self._tenor_to_float, tenors))
        pairs = sorted(zip(tenor_values, rates, strict=True), key=lambda x: x[0])
        self._tenors = [p[0] for p in pairs]
        self._rates = [p[1] for p in pairs]

        match self.interpolation:
            case InterpolationMethod.LINEAR:
                m, c = np.polyfit(self._tenors, self._rates, 1)
                self._curve = lambda x: m * x + c
            case InterpolationMethod.PIECEWISE_LINEAR:
                self._curve = interp1d(
                    self._tenors,
                    self._rates,
                    kind="linear",
                    fill_value="extrapolate",  # pyright: ignore[reportArgumentType]
                )
            case InterpolationMethod.CUBIC_SPLINE:
                spline = CubicSpline(
                    self._tenors,
                    self._rates,
                    bc_type="natural",
                    extrapolate=True,
                )
                self._curve = spline
            case _:
                raise ValueError(
                    f"Unsupported interpolation method: {self.interpolation}"
                )

        self.is_initialized = True

    def shifted(
        self,
        bps: float,
    ) -> Self:
        shift = bps / 10000.0
        curve = type(self)(
            calendar=self.calendar,
            interpolation=self.interpolation,
            is_initialized=self.is_initialized,
        )
        curve.rates = [r + shift for r in self.rates]
        curve.tenors = self.tenors
        curve.fit(curve.tenors, curve.rates)
        return curve

    def par_yield(
        self,
        tenor: float | Period | datetime.date,
    ) -> float:
        return self._curve(self._tenor_to_float(tenor))
