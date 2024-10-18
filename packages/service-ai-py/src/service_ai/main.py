import os

import numpy as np
import torch
from lib_shared.core.utils.random import random


class Model(torch.nn.Module):
    def __init__(self) -> None:
        super().__init__()
        self.linear_relu_stack = torch.nn.Linear(3, 1)

    def forward(self, x):  # -> Any:
        logits = self.linear_relu_stack(x)
        return logits


a1 = random(min=1, max=1e1)
a2 = random(min=1e1 + 1, max=1e2)
a3 = random(min=1e2 + 1, max=1e3)
e = random(min=1e3 + 1, max=1e4)

x1 = np.array(
    [
        random(min=1, max=9, n_decimals=2),
        random(min=1, max=9, n_decimals=2),
        random(min=1, max=9, n_decimals=2),
    ]
)
x2 = np.array(
    [
        random(min=1, max=9, n_decimals=2),
        random(min=1, max=9, n_decimals=2),
        random(min=1, max=9, n_decimals=2),
    ]
)
x3 = np.array(
    [
        random(min=1, max=9, n_decimals=2),
        random(min=1, max=9, n_decimals=2),
        random(min=1, max=9, n_decimals=2),
    ]
)
y = (x1 * a1 + x2 * a2 + x2 * a3) + e


model = Model()
weights = model.parameters()
optimizer = torch.optim.SGD(weights, lr=0.01, weight_decay=0.1)
criterion = torch.nn.MSELoss(reduction="mean")

epochs = 100
for epoch in range(epochs):
    optimizer.zero_grad()
    y_pred = model(torch.tensor([x1, x2, x3]).type(torch.float))
    loss = criterion(y_pred, torch.tensor(y).type(torch.float))
    loss.backward()
    optimizer.step()
    print(loss.item())

print(model.parameters())
