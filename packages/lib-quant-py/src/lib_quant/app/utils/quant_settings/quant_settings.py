from lib_shared.core.utils.field.field import Field
from lib_shared.settings.utils.settings.settings import Settings

from lib_quant.datetime.utils.calendar.calendar import Calendar


class QuantSettings(Settings):
    calendar: Calendar = Field(default_factory=Calendar)
