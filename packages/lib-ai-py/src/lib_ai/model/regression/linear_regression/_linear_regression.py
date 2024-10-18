import polars as pl
import torch
from lib_ai.data.array_data import ArrayData
from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.model.base_model.base_model_constants import OPTIMIZER
from lib_ai.model.regression.linear_regression._linear_regression_models import (
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
    def __init__(self, n_features: int) -> None:
        self._instance = _Instance(n_features=n_features)

    def test(self, dataset: XYDataset) -> None:
        self._instance.train(mode=False)
        dataset.y.data = self._instance(dataset.x.to_tensor().squeeze())

    def train(
        self,
        dataset: XYDataset,
        params: _LinearRegressionTrainParamsModel | None = None,
    ) -> None:
        if params is None:
            params = {}

        self._instance.train(mode=True)
        weights = self._instance.parameters()
        n_epochs = params.get("n_epochs", 1000)
        optimizer = params.get("optimizer", OPTIMIZER.SGD)
        scorer = params.get("scorer", mse_scorer)
        match optimizer:
            case OPTIMIZER.ADAM:
                optimizer = Adam(weights, lr=1e-2)
            case OPTIMIZER.SGD:
                optimizer = SGD(weights, lr=1e-2)
            case _:
                optimizer = Adam(weights, lr=1e-2)

        early_stopping = EarlyStopping()
        [x, y] = dataset.x.to_tensor(), dataset.y
        for epoch in range(n_epochs):
            optimizer.zero_grad()
            y_pred = self._instance(x)
            loss = scorer(ArrayData(data=y_pred), y)
            print(loss)
            optimizer.step()
            if early_stopping.stop(score=loss):
                logger.debug(f"Early stopping after {epoch} epochs")
                break

        print(list(self._instance.parameters()))
