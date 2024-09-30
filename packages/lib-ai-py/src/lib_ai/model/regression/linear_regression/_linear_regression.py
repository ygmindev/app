import torch
from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.model.regression.linear_regression._linear_regression_models import (
    _LinearRegressionModel,
    _LinearRegressionTrainParamsModel,
)
from torch.nn import Linear, Module


class _Instance(Module):
    def __init__(self, n_features: int) -> None:
        super(_Instance, self).__init__()
        self.linear = Linear(in_features=n_features, out_features=1)

    def forward(self, x):
        return self.linear(x)


class _LinearRegression(_LinearRegressionModel):
    def __init__(self, n_features: int) -> None:
        self._instance = _Instance(n_features=n_features)

    def test(self, dataset: XYDataset) -> None:
        print(self._instance(dataset.x.to_tensor()))

    def train(
        self,
        dataset: XYDataset,
        params: _LinearRegressionTrainParamsModel,
    ) -> None:
        weights = self._instance.parameters()
        # optimizer = torch.optim.SGD(weights, lr=0.01)
        optimizer = torch.optim.Adam(weights, lr=0.1)
        loss_function = torch.nn.MSELoss(reduction="mean")
        x, y = dataset.x.to_tensor().type(torch.float), dataset.y.to_tensor().type(torch.float)
        for epoch in range(params.get("n_epochs", 10)):
            y_pred = self._instance(x)
            loss = loss_function(y_pred, y)
            optimizer.zero_grad()
            loss.backward()
            optimizer.step()
            print(loss.item())
