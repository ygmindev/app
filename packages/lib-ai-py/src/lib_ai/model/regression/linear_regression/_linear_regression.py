from typing import Mapping

import torch
from lib_ai.core.utils.chunks import chunks
from lib_ai.data.array_data import ArrayData
from lib_ai.data.matrix_data import MatrixData
from lib_ai.data.matrix_data.matrix_data_models import MatrixDataModel
from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.dataset.xy_matrix_dataset import XYMatrixDataset
from lib_ai.model.base_model.base_model_constants import OPTIMIZER
from lib_ai.model.regression.linear_regression._linear_regression_models import (
    _LinearRegressionEvalParamsModel,
    _LinearRegressionModel,
    _LinearRegressionTrainParamsModel,
)
from lib_ai.model.utils.early_stopping import EarlyStopping
from lib_ai.scoring.scorer.mse_scorer import mse_scorer
from lib_shared.core.utils.logger import logger
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


class _LinearRegression(_LinearRegressionModel):
    _instance: _Instance

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
    ) -> Mapping[str, float]:
        if params is None:
            params = {}

        scorer = params.get("scorer", mse_scorer)

        y = dataset.y
        self.predict(dataset)
        if dataset.y is None or y is None:
            raise Exception()

        score = scorer(dataset.y, y)
        logger.debug(f"Loss: {score:.2f}")
        return {"score": score}

    def fit(
        self,
        dataset: XYMatrixDataset,
        params: _LinearRegressionTrainParamsModel | None = None,
    ) -> None:
        if params is None:
            params = {}

        n_epochs = params.get("n_epochs", 1000)
        optimizer = params.get("optimizer", OPTIMIZER.SGD)
        scorer = params.get("scorer", mse_scorer)

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
                optimizer.zero_grad()
                y_pred = self._instance(x.to_tensor())
                loss = scorer(MatrixData(data=y_pred), y)
                optimizer.step()

            if early_stopping.stop(score=loss):
                logger.debug(f"Early stopping after {epoch} epochs")
                break
