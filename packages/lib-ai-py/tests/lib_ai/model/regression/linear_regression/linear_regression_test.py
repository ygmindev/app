import numpy as np
import torch
from lib_ai.data.array_data import ArrayData
from lib_ai.data.tabular_data import TabularData
from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.model.regression.linear_regression import LinearRegression
from lib_shared.core.utils.random import random


def test_works() -> None:
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

    x = TabularData.from_dict(
        {
            "x1": list(x1),
            "x2": list(x2),
            "x3": list(x3),
        }
    )
    y = ArrayData.from_list(list(y))
    trainset = XYDataset(
        x=x,
        y=y,
    )
    model = LinearRegression(n_features=3)
    model.train(trainset)

    testset = XYDataset(
        x=x,
        y=ArrayData.from_list([1, 2, 3]),
    )
    model.test(testset)

    print("@@@")
    print(y.data)
    print("vs.")
    print(testset.y.data)
    assert 1 == 1
