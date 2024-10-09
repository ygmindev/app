# from logging import getLogger

# import torch
# from lib_ai.dataset.xy_dataset import XYDataset
# from lib_ai.model.base_model.base_model_constants import OPTIMIZER
# from lib_ai.model.regression.linear_regression._linear_regression_models import (
#     _LinearRegressionModel,
#     _LinearRegressionTrainParamsModel,
# )
# from lib_ai.model.utils.early_stopping import EarlyStopping
# from lib_shared.core.utils.logger import logger
# from torch.nn import Linear, Module
# from torch.optim.adam import Adam
# from torch.optim.sgd import SGD


# class _Instance(Module):
#     def __init__(self, n_features: int) -> None:
#         super(_Instance, self).__init__()
#         self.linear = Linear(in_features=n_features, out_features=1)

#     def forward(self, x):
#         return self.linear(x)


# class _LinearRegression(_LinearRegressionModel):
#     def __init__(self, n_features: int) -> None:
#         self._instance = _Instance(n_features=n_features)

#     def test(self, dataset: XYDataset) -> None:
#         print(self._instance(dataset.x.to_tensor()))

#     def train(
#         self,
#         dataset: XYDataset,
#         params: _LinearRegressionTrainParamsModel | None = None,
#     ) -> None:
#         if params is None:
#             params = {}

#         weights = self._instance.parameters()
#         n_epochs = params.get("n_epochs", 100)
#         optimizer = params.get("optimizer", OPTIMIZER.ADAM)

#         match optimizer:
#             case OPTIMIZER.ADAM:
#                 optimizer = Adam(weights, lr=0.1)
#             case OPTIMIZER.SGD:
#                 optimizer = SGD(weights, lr=0.01)
#             case _:
#                 optimizer = Adam(weights, lr=0.1)

#         loss_function = torch.nn.MSELoss(reduction="mean")
#         x, y = dataset.x.to_tensor(), dataset.y.to_tensor()
#         early_stopping = EarlyStopping()
#         for epoch in range(n_epochs):
#             y_pred = self._instance(x)
#             loss = loss_function(y_pred, y)
#             optimizer.zero_grad()
#             loss.backward()
#             optimizer.step()
#             if early_stopping.stop(score=loss.item()):
#                 logger.debug(f"Early stopping after {epoch} epochs")
#                 break


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
        self.linear = Linear(in_features=n_features, out_features=1)

    def forward(self, x) -> torch.Tensor:
        return self.linear(x)


class _LinearRegression(_LinearRegressionModel):
    def __init__(self, n_features: int) -> None:
        self._instance = _Instance(n_features=n_features)

    def test(self, dataset: XYDataset) -> None:
        print(self._instance(dataset.x.to_tensor()))

    def train(
        self,
        dataset: XYDataset,
        params: _LinearRegressionTrainParamsModel | None = None,
    ) -> None:
        if params is None:
            params = {}

        weights = self._instance.parameters()
        n_epochs = params.get("n_epochs", 100)
        optimizer = params.get("optimizer", OPTIMIZER.ADAM)
        scorer = params.get("scorer", mse_scorer)

        match optimizer:
            case OPTIMIZER.ADAM:
                optimizer = Adam(weights, lr=0.1)
            case OPTIMIZER.SGD:
                optimizer = SGD(weights, lr=0.01)
            case _:
                optimizer = Adam(weights, lr=0.1)

        early_stopping = EarlyStopping()
        [x, y] = dataset.x.to_tensor(), dataset.y
        for epoch in range(n_epochs):
            y_pred = pl.Series(self._instance(x).detach().cpu().numpy().squeeze())
            optimizer.zero_grad()
            loss = scorer(ArrayData(data=y_pred), y)
            optimizer.step()
            if early_stopping.stop(score=loss):
                logger.debug(f"Early stopping after {epoch} epochs")
                break
