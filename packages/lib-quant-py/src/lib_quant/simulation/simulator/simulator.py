from typing import Generic, TypeVar

import numpy as np
from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.private_field.private_field import PrivateField

from lib_quant.datetime.utils.calendar.calendar import Calendar
from lib_quant.simulation.utils.calibration_params.calibration_params import (
    CalibrationParams,
)
from lib_quant.simulation.utils.calibration_result.calibration_result import (
    CalibrationResult,
)
from lib_quant.simulation.utils.simulation_params.simulation_params import (
    SimulationParams,
)
from lib_quant.simulation.utils.simulation_result.simulation_result import (
    SimulationResult,
)

TParams = TypeVar("TParams", bound=BaseModel)
TCalib = TypeVar("TCalib", bound=CalibrationParams)
TSim = TypeVar("TSim", bound=SimulationParams)
TResult = TypeVar("TResult", bound=SimulationResult)


class Simulator(
    BaseModel,
    Generic[
        TParams,
        TCalib,
        TSim,
        TResult,
    ],
):
    params: TParams
    calendar: Calendar
    seed: int | None = 42
    is_calibrated: bool = False

    _rng: np.random.Generator = PrivateField()

    def post_init(self) -> None:
        self._rng = np.random.default_rng(self.seed)

    def _calibrate(
        self,
        params: TCalib,
    ) -> CalibrationResult[TParams]:
        raise NotImplementedError("Subclasses must implement this method")
