import datetime

from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field

from lib_quant.app.utils.quant_settings.quant_settings import QuantSettings
from lib_quant.datetime.utils.period.period import Period


class SimulationParams(BaseModel):
    n_paths: int = 1_000
    initial_value: float = 1.0
    start: datetime.date = Field(
        default_factory=lambda: QuantSettings.get().calendar.as_of_date
    )
    period: Period | datetime.date = Field(default=Period(years=1))
    step: Period = Field(default=Period(days=1))
