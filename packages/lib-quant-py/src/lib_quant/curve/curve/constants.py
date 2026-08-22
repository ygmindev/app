from enum import StrEnum

import QuantLib as ql


class InterpolationMethod(StrEnum):
    LINEAR = "LINEAR"
    LOG_LINEAR = "LOG_LINEAR"
    PIECEWISE_LINEAR = "PIECEWISE_LINEAR"
    PIECEWISE_LOG_CUBIC = "PIECEWISE_LOG_CUBIC"
    PIECEWISE_SPLINE_CUBIC = "PIECEWISE_SPLINE_CUBIC"


class Compounding(StrEnum):
    COMPOUNDED = "COMPOUNDED"
    CONTINUOUS = "CONTINUOUS"

    def to_ql(self) -> ql.CompoundOption:
        match self:
            case Compounding.COMPOUNDED:
                return ql.Compounded
            case Compounding.CONTINUOUS:
                return ql.Continuous
            case _:
                raise ValueError(f"Invalid compounding: {self}")
