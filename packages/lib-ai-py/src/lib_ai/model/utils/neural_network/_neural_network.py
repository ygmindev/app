from __future__ import annotations

from typing import Unpack

import torch
from lib_ai.core.utils.chunks import chunks
from lib_ai.data.matrix_data import MatrixData
from lib_ai.dataset.xy_matrix_dataset import XYMatrixDataset
from lib_ai.model.base_model import BaseModel
from lib_ai.model.base_model.base_model_constants import OPTIMIZER
from lib_ai.model.base_model.base_model_models import BaseModelEvalParamsModel
from lib_ai.model.utils.early_stopping import EarlyStopping
from lib_ai.model.utils.neural_network._neural_network_models import (
    _NeuralNetworkFitParamsModel,
    _NeuralNetworkModel,
    _NeuralNetworkParamsModel,
)
from lib_shared.core.utils.get_item import get_item
from lib_shared.core.utils.logger import logger
from torch.nn import Module
from torch.optim.adam import Adam
from torch.optim.sgd import SGD


class _Instance(Module):
    def __init__(self, **params: Unpack[_NeuralNetworkParamsModel]) -> None:
        super().__init__()
        layers = get_item(params, "layers")
        self._layers = torch.nn.Sequential(*list(map(lambda x: x.layer, layers)))

    def forward(self, x) -> torch.Tensor:
        return self._layers(x)


class _NeuralNetwork[
    TFit: _NeuralNetworkFitParamsModel,
    TEval: BaseModelEvalParamsModel,
](
    BaseModel[
        XYMatrixDataset,
        TFit,
        TEval,
    ],
    _NeuralNetworkModel[
        TFit,
        TEval,
    ],
):
    def __init__(self, **params: Unpack[_NeuralNetworkParamsModel]) -> None:
        self._instance = _Instance(**params)

    def predict(
        self,
        dataset: XYMatrixDataset,
    ) -> None:
        self._instance.train(mode=False)
        dataset.y = MatrixData(self._instance(dataset.x.to_tensor().squeeze()))

    def fit(
        self,
        dataset: XYMatrixDataset,
        params: TFit | None = None,
    ) -> None:
        if params is None:
            params = {}

        n_epochs = get_item(params, "n_epochs", 1000)
        optimizer = get_item(params, "optimizer", OPTIMIZER.SGD)
        scorer = get_item(params, "scorer")

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
