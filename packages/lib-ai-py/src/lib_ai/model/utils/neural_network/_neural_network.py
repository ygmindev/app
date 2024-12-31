from __future__ import annotations

import torch
from accelerate import Accelerator
from lib_ai.core.utils.batch import batch
from lib_ai.core.utils.get_device import get_device
from lib_ai.data.matrix_data import MatrixData
from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.model.base_model import BaseModel
from lib_ai.model.base_model.base_model_constants import Optimizer
from lib_ai.model.base_model.base_model_models import (
    BaseModelEvalParamsModel,
    BaseModelPredParamsModel,
)
from lib_ai.model.utils.early_stopping import EarlyStopping
from lib_ai.model.utils.neural_network._neural_network_models import (
    _NeuralNetworkFitParamsModel,
    _NeuralNetworkModel,
    _NeuralNetworkParamsModel,
)
from lib_ai.scoring.scoring_constants import ScoringMode
from lib_shared.core.utils.get_item import get_item
from lib_shared.core.utils.logger import logger
from torch.optim.adam import Adam
from torch.optim.lr_scheduler import ReduceLROnPlateau
from torch.optim.sgd import SGD

accelerator = Accelerator()


class _Module(torch.nn.Module):
    def __init__(self, params: _NeuralNetworkParamsModel) -> None:
        super().__init__()
        layers = get_item(params, "layers")
        device = get_device()
        self._layers = torch.nn.Sequential(*list(map(lambda x: x.layer, layers))).to(device)

    def forward(self, x) -> torch.Tensor:
        return self._layers(x)


class _NeuralNetwork[
    TFit: _NeuralNetworkFitParamsModel,
    TEval: BaseModelEvalParamsModel,
    TPred: BaseModelPredParamsModel,
](
    BaseModel[
        _NeuralNetworkParamsModel,
        TFit,
        TEval,
        TPred,
        MatrixData,
        MatrixData,
    ],
    _NeuralNetworkModel[
        TFit,
        TEval,
        TPred,
    ],
):
    def __init__(self, params: _NeuralNetworkParamsModel) -> None:
        super().__init__(params=params)
        self._module = accelerator.prepare(_Module(params=params))
        self._is_classification = get_item(params, "is_classification", False)

    def predict(
        self,
        data: MatrixData,
        _params: TPred | None = None,
    ) -> MatrixData:
        y_pred = self.predict_probability(data)
        if self._is_classification:
            return MatrixData(y_pred.to_tensor().argmax(dim=1))
        return y_pred

    def predict_probability(
        self,
        data: MatrixData,
        _params: TPred | None = None,
    ) -> MatrixData:
        self._module.train(mode=False)
        return MatrixData(self._module(data.to_tensor()))

    def fit(
        self,
        dataset: XYDataset[MatrixData, MatrixData],
        params: TFit | None = None,
    ) -> None:
        objective = get_item(self._params, "objective")

        n_epochs = get_item(params, "n_epochs", 1000)
        optimizer = get_item(params, "optimizer", Optimizer.SGD)
        scoring_mode = get_item(params, "scoring_mode", ScoringMode.MIN)

        self._module.train(mode=True)
        weights = self._module.parameters()

        match optimizer:
            case Optimizer.ADAM:
                optimizer = Adam(weights, lr=1e-1)
            case Optimizer.SGD:
                optimizer = SGD(weights, lr=1e-1)
            case _:
                optimizer = Adam(weights, lr=1e-1)

        scheduler = ReduceLROnPlateau(
            optimizer,
            mode="min" if scoring_mode == ScoringMode.MIN else "max",
            patience=100,
            threshold=5,
            factor=1e-1,
        )

        optimizer, scheduler = accelerator.prepare(optimizer, scheduler)
        early_stopping = EarlyStopping(scoring_mode=scoring_mode)

        for epoch in range(n_epochs):
            for batchset in batch(
                data=dataset,
                batch_size=int(len(dataset) / 5),
            ):
                x, y = batchset.x.to_tensor(), batchset.y
                y_pred = self._module(x)
                optimizer.zero_grad()
                loss = objective(MatrixData(data=y_pred), y)
                optimizer.step()

                if early_stopping.is_improved(score=loss):
                    self.evaluate(batchset)

            scheduler.step(loss)

            if early_stopping.stop(score=loss):
                logger.debug(f"Early stopping after {epoch} epochs")
                break
