import QuantLib as ql
from lib_shared.core.utils.base_model.base_model import BaseModel


class Period(BaseModel):
    days: float | None = None
    months: float | None = None
    quarters: float | None = None
    weeks: float | None = None
    years: float | None = None

    def __truediv__(self, other: "Period") -> float:
        days = (
            (self.years or 0) * 365
            + (self.months or 0) * 30
            + (self.days or 0)
            + (self.weeks or 0) * 7
            + (self.quarters or 0) * 90
        )
        other_days = (
            (other.years or 0) * 365
            + (other.months or 0) * 30
            + (other.days or 0)
            + (other.weeks or 0) * 7
            + (other.quarters or 0) * 90
        )
        if other_days == 0:
            raise ValueError("Divide by zero")
        return days / other_days

    def __floordiv__(self, other: "Period") -> int:
        return int(self.__truediv__(other))

    def to_ql(self) -> ql.Period:
        period = ql.Period()
        if self.years is not None:
            period += ql.Period(int(self.years), ql.Years)
        if self.months is not None:
            period += ql.Period(int(self.months), ql.Months)
        if self.weeks is not None:
            period += ql.Period(int(self.weeks), ql.Weeks)
        if self.days is not None:
            period += ql.Period(int(self.days), ql.Days)
        if self.quarters is not None:
            period += ql.Period(int(self.quarters * 3), ql.Months)
        return period
