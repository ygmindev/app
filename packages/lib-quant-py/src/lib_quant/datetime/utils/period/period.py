import datetime

import QuantLib as ql
from dateutil.relativedelta import relativedelta
from lib_shared.core.utils.base_model.base_model import BaseModel

from lib_quant.datetime.constants import DateUnit


class Period(BaseModel):
    days: float | None = None
    months: float | None = None
    quarters: float | None = None
    weeks: float | None = None
    years: float | None = None

    def __truediv__(
        self,
        other: "Period",
    ) -> float:
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

    def __floordiv__(
        self,
        other: "Period",
    ) -> int:
        return int(self.__truediv__(other))

    @property
    def ql(self) -> ql.Period:
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

    @classmethod
    def from_date(
        cls,
        end: datetime.date,
        start: datetime.date | None = None,
        unit: DateUnit = DateUnit.DAY,
    ) -> "Period":
        from lib_quant.app.utils.quant_settings.quant_settings import QuantSettings

        start = start or QuantSettings.get().calendar.as_of_date

        match unit:
            case DateUnit.DAY:
                return cls(days=(end - start).days)
            case DateUnit.WEEK:
                return cls(weeks=(end - start).days / 7)

        delta = relativedelta(end, start)
        n_months = delta.years * 12 + delta.months

        month_mark = start + relativedelta(months=n_months)
        remaining = (end - month_mark).days
        if remaining:
            n_days_next_month = (
                (month_mark + relativedelta(months=1)) - month_mark
            ).days
            n_months += remaining / n_days_next_month

        match unit:
            case DateUnit.MONTH:
                return cls(months=n_months)
            case DateUnit.QUARTER:
                return cls(quarters=n_months / 3)
            case DateUnit.YEAR:
                return cls(years=n_months / 12)

        raise ValueError(f"Unsupported unit: {unit}")
