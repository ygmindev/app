import datetime

import numpy as np

from lib_quant.simulation.simulator.simulator import (
    Simulator,
    TCalib,
    TParams,
    TResult,
    TSim,
)
from lib_quant.simulation.utils.simulation_result.simulation_result import (
    SimulationResult,
)


class RatesSimulator(
    Simulator[
        TParams,
        TCalib,
        TSim,
        TResult,
    ]
):
    def _step(
        self,
        state: np.ndarray,
        t: float,
        dt: float,
        dW: np.ndarray,
    ) -> np.ndarray:
        raise NotImplementedError("Subclasses must implement this method")

    def _draw(
        self,
        params: TSim,
        n_steps: int,
    ) -> np.ndarray:
        z = self._rng.standard_normal((params.n_paths, n_steps))
        return z * np.sqrt(params.T / n_steps)

    def _simulate(
        self,
        params: TSim,
    ) -> TResult:
        start = params.start
        step = params.step
        period = params.period
        n_paths = params.n_paths

        if isinstance(period, datetime.date):
            end = period
        else:
            end = self.calendar.advance(
                period=period,
                start=start,
            )
        dates = self.calendar.business_days(
            end=end,
            start=start,
            step=step,
        )

        T = self.calendar.year_fraction(end=end, start=start)
        n_steps = len(dates) - 1
        dt = T / n_steps

        dW = self._draw(params, n_steps)
        values = np.zeros((n_paths, n_steps + 1))
        values[:, 0] = params.initial_value
        times = np.linspace(0.0, T, n_steps + 1)
        for i in range(n_steps):
            values[:, i + 1] = self._step(
                state=values[:, i],
                t=times[i],
                dt=dt,
                dW=dW[:, i],
            )
        return SimulationResult(
            values=values,
            dates=dates,
        )
