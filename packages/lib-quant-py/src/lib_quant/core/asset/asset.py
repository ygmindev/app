import datetime

import QuantLib as ql
from lib_shared.core.utils.base_model.base_model import BaseModel

from lib_quant.datetime.utils.calendar.calendar import Calendar
from lib_quant.datetime.utils.period.period import Period


class Asset(BaseModel):
    calendar: Calendar
    issue_date: datetime.date
    size: float = 0.0
    currency: str | None = None
    tenor: Period | datetime.date | None = None

    @property
    def ql(self) -> ql.Observable:
        raise NotImplementedError("subclasses must implement this method")

    @property
    def maturity_date(self) -> datetime.date:
        return (
            self.tenor
            if isinstance(self.tenor, datetime.date)
            else self.calendar.advance(self.tenor, self.issue_date)
        )
