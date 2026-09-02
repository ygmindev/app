from typing import Self

from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field

from lib_quant.app.utils.quant_settings.quant_settings import QuantSettings
from lib_quant.datetime.utils.calendar.calendar import Calendar


class Curve(BaseModel):
    calendar: Calendar = Field(default_factory=lambda: QuantSettings.get().calendar)
    is_initialized: bool = Field(default=False)

    def shifted(
        self,
        bps: float,
    ) -> Self:
        raise NotImplementedError("Subclasses must implement this method")
