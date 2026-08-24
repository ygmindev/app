from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field

from lib_quant.app.utils.quant_settings.quant_settings import QuantSettings
from lib_quant.datetime.constants import Frequency
from lib_quant.datetime.utils.calendar.calendar import Calendar


class SwapLeg(BaseModel):
    frequency: Frequency
    notional: float | None = None
    calendar: Calendar = Field(default_factory=lambda: QuantSettings.get().calendar)
