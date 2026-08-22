from typing import Generic

from lib_shared.core.utils.base_model.base_model import BaseModel

from lib_quant.simulation.simulator.simulator import TParams


class CalibrationResult(BaseModel, Generic[TParams]):
    params: TParams
    is_success: bool
