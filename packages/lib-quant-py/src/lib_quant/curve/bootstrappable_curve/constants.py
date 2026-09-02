from enum import StrEnum
from typing import Type

import QuantLib as ql


class BootstrappingMethod(StrEnum):
    LINEAR = "LINEAR"
    LOG_LINEAR = "LOG_LINEAR"
    PIECEWISE_LINEAR = "PIECEWISE_LINEAR"
    PIECEWISE_LOG_CUBIC = "PIECEWISE_LOG_CUBIC"
    PIECEWISE_SPLINE_CUBIC = "PIECEWISE_SPLINE_CUBIC"

    @property
    def ql(self) -> Type[ql.YieldTermStructure]:
        return {
            BootstrappingMethod.LINEAR: ql.Linear,
            BootstrappingMethod.LOG_LINEAR: ql.LogLinear,
            BootstrappingMethod.PIECEWISE_LINEAR: ql.PiecewiseLinearForward,
            BootstrappingMethod.PIECEWISE_LOG_CUBIC: ql.PiecewiseLogCubicDiscount,
            BootstrappingMethod.PIECEWISE_SPLINE_CUBIC: ql.PiecewiseSplineCubicDiscount,
        }[self]
