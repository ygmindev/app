import numpy as np
from lib_shared.core.utils.base_model.base_model import BaseModel

from lib_quant.simulation.rates_simulator.rates_simulator import (
    RatesSimulator,
)
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


class HullWhiteParams(BaseModel):
    kappa: float = 0.1
    sigma: float = 0.01
    theta: float = 0.03


class HullWhiteCalibParams(CalibrationParams): ...


class HullWhiteSimParams(SimulationParams): ...


class HullWhiteSimResult(SimulationResult): ...


class HullWhiteSimulator(
    RatesSimulator[
        HullWhiteParams,
        HullWhiteCalibParams,
        HullWhiteSimParams,
        HullWhiteSimResult,
    ]
):
    def _calibrate(
        self,
        params: HullWhiteCalibParams,
    ) -> CalibrationResult[HullWhiteParams]:
        return CalibrationResult(
            params=HullWhiteParams(),
            is_success=True,
        )

    def _step(
        self,
        state: np.ndarray,
        t: float,
        dt: float,
        dW: np.ndarray,
    ) -> np.ndarray:
        kappa = self.params.kappa
        sigma = self.params.sigma
        theta = self.params.theta
        return state + (theta - kappa * state) * dt + sigma * dW
