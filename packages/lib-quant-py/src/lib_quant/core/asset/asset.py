import datetime

import QuantLib as ql
from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field

from lib_quant.app.utils.quant_settings.quant_settings import QuantSettings
from lib_quant.datetime.utils.calendar.calendar import Calendar
from lib_quant.datetime.utils.period.period import Period


class Asset(BaseModel):
    calendar: Calendar = Field(default_factory=lambda: QuantSettings.get().calendar)
    issue_date: datetime.date = Field(
        default_factory=lambda: QuantSettings.get().calendar.as_of_date
    )
    size: float = 1.0
    currency: str | None = None
    tenor: Period | None = None
    maturity_date: datetime.date | None = None

    def post_init(self) -> None:
        if self.tenor is not None:
            self.maturity_date = self.calendar.advance(
                self.tenor,
                self.calendar.as_of_date,
            )
        if self.maturity_date is not None:
            self.tenor = Period.from_date(
                self.maturity_date,
                self.calendar.as_of_date,
            )

    @property
    def ql(self) -> ql.Observable:
        raise NotImplementedError("subclasses must implement this method")
