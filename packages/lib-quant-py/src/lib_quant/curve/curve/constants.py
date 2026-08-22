from enum import StrEnum
from typing import Type

import QuantLib as ql


class InterpolationMethod(StrEnum):
    LINEAR = "LINEAR"
    LOG_LINEAR = "LOG_LINEAR"
    PIECEWISE_LINEAR = "PIECEWISE_LINEAR"
    PIECEWISE_LOG_CUBIC = "PIECEWISE_LOG_CUBIC"
    PIECEWISE_SPLINE_CUBIC = "PIECEWISE_SPLINE_CUBIC"

    @property
    def ql(self) -> Type[ql.Linear]:
        return {
            InterpolationMethod.LINEAR: ql.Linear,
            InterpolationMethod.LOG_LINEAR: ql.LogLinear,
            InterpolationMethod.PIECEWISE_LINEAR: ql.PiecewiseLinearForward,
            InterpolationMethod.PIECEWISE_LOG_CUBIC: ql.PiecewiseLogCubicDiscount,
            InterpolationMethod.PIECEWISE_SPLINE_CUBIC: ql.PiecewiseSplineCubicDiscount,
        }[self]


class Compounding(StrEnum):
    COMPOUNDED = "COMPOUNDED"
    CONTINUOUS = "CONTINUOUS"

    @property
    def ql(self) -> ql.CompoundOption:
        return {
            Compounding.COMPOUNDED: ql.Compounded,
            Compounding.CONTINUOUS: ql.Continuous,
        }[self]
