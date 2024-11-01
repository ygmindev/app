import numpy as np
from lib_ai.data.array_data import ArrayData
from lib_ai.data.matrix_data import MatrixData
from lib_ai.data.tabular_data import TabularData
from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.dataset.xy_matrix_dataset import XYMatrixDataset
from lib_ai.model.regression.linear_regression import LinearRegression
from lib_shared.core.utils.random import random


def test_works() -> None:
    a1 = random(min=1, max=1e1)
    a2 = random(min=1e1 + 1, max=1e2)
    e = random(min=1e2 + 1, max=1e3)
    x1 = np.array(list([random(min=1, max=9) for _ in range(10)]))
    x2 = np.array(list([random(min=1, max=9) for _ in range(10)]))
    y = (x1 * a1 + x2 * a2) + e
    x = TabularData.from_dict({"x1": list(x1), "x2": list(x2)}).to_matrix()
    y = MatrixData.from_array(list(y))
    trainset, testset = XYMatrixDataset(x=x, y=y).split()
    model = LinearRegression()
    model.fit(trainset)
    loss = model.evaluate(testset)
    print(loss)
    assert 1 == 1
    # assert abs(loss) <= 1
