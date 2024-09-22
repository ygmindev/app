import os

import torch
from lib_ai.core.utils.device import device
from lib_ai.data.tabular_data import TabularData
from lib_shared.core.utils import merge
from torch import nn, set_default_device
from torch.utils.data import DataLoader
from torchvision import datasets, transforms


class NeuralNetwork(nn.Module):
    def __init__(self) -> None:
        super().__init__()
        self.flatten = nn.Flatten()
        self.linear_relu_stack = nn.Sequential(
            nn.Linear(28 * 28, 512),
            nn.ReLU(),
            nn.Linear(512, 512),
            nn.ReLU(),
            nn.Linear(512, 10),
        )

    def forward(self, x):  # -> Any:
        x = self.flatten(x)
        logits = self.linear_relu_stack(x)
        return logits


# model = NeuralNetwork().to(device)
# set_default_device(device)
# X = torch.rand(1, 28, 28, device=device)
# logits = model(X)
# pred_probab = nn.Softmax(dim=1)(logits)
# y_pred = pred_probab.argmax(1)
# print(f"Predicted class: {y_pred}")

data = TabularData()
