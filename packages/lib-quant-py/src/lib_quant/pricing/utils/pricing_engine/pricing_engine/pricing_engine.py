from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field

from lib_quant.datetime.utils.calendar.calendar import Calendar


class PricingEngine(BaseModel):
    calendar: Calendar = Field(default_factory=Calendar)
