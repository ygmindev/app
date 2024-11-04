from __future__ import annotations

import torch
from lib_ai.core.utils.chunks import chunks
from lib_ai.data.matrix_data import MatrixData
from lib_ai.dataset.xy_matrix_dataset import XYMatrixDataset
from lib_ai.model.base_model.base_model_constants import OPTIMIZER
from lib_ai.model.regression.base_regression.base_regression_models import (
    BaseRegressionScoreModel,
)
from lib_ai.model.regression.linear_regression._linear_regression_models import (
    _LinearRegressionEvalParamsModel,
)
from lib_ai.model.utils.early_stopping import EarlyStopping
from lib_ai.model.utils.neural_network._neural_network_models import (
    _NeuralNetworkModel,
    _NeutralNetworkFitParamsModel,
)
from lib_ai.scoring.scorer.mse_scorer import mse_scorer
from lib_shared.core.utils.logger import logger
from lib_shared.core.utils.not_found_exception import NotFoundException
from torch.nn import Linear, Module
from torch.optim.adam import Adam
from torch.optim.sgd import SGD


class _Instance(Module):
    def __init__(self, n_features: int) -> None:
        super(_Instance, self).__init__()
        self.linear = Linear(
            in_features=n_features,
            out_features=1,
        )

    def forward(self, x) -> torch.Tensor:
        return self.linear(x)


class _NeuralNetwork[TFit: _NeutralNetworkFitParamsModel, TEval, TScore](
    _NeuralNetworkModel[TFit, TEval, TScore]
):
    def predict(
        self,
        dataset: XYMatrixDataset,
    ) -> None:
        self._instance.train(mode=False)
        dataset.y = MatrixData(self._instance(dataset.x.to_tensor().squeeze()))

    def evaluate(
        self,
        dataset: XYMatrixDataset,
        params: _LinearRegressionEvalParamsModel | None = None,
    ) -> BaseRegressionScoreModel:
        if params is None:
            params = {}

        scorer = params.get("scorer", mse_scorer)
        if scorer is None:
            raise NotFoundException()

        y = dataset.y
        self.predict(dataset)
        if dataset.y is None or y is None:
            raise NotFoundException()

        score = scorer(dataset.y, y)
        return {"mean_squared_error": score}

    def fit(
        self,
        dataset: XYMatrixDataset,
        params: TFit | None = None,
    ) -> None:
        if params is None:
            params = {}

        n_epochs = params.get("n_epochs", 1000)
        optimizer = params.get("optimizer", OPTIMIZER.SGD)
        scorer = params.get("scorer", mse_scorer)

        if scorer is None:
            raise NotFoundException()

        self._instance = _Instance(n_features=dataset.x.shape[-1])
        self._instance.train(mode=True)
        weights = self._instance.parameters()

        match optimizer:
            case OPTIMIZER.ADAM:
                optimizer = Adam(weights, lr=1e-2)
            case OPTIMIZER.SGD:
                optimizer = SGD(weights, lr=1e-2)
            case _:
                optimizer = Adam(weights, lr=1e-2)

        early_stopping = EarlyStopping()
        for epoch in range(n_epochs):
            for batchset in chunks(
                data=dataset,
                chunk_size=2,
            ):
                x, y = batchset.x, batchset.y
                y_pred = self._instance(x.to_tensor())
                optimizer.zero_grad()
                loss = scorer(MatrixData(data=y_pred), y)
                optimizer.step()

            if early_stopping.stop(score=loss):
                logger.debug(f"Early stopping after {epoch} epochs")
                break
