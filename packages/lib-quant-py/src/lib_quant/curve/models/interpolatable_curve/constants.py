from enum import StrEnum


class InterpolationMethod(StrEnum):
    LINEAR = "LINEAR"
    PIECEWISE_LINEAR = "PIECEWISE_LINEAR"
    CUBIC_SPLINE = "CUBIC_SPLINE"
