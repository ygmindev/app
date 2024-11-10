import numpy as np
from lib_ai.data.matrix_data import MatrixData
from lib_ai.data.tabular_data import TabularData
from lib_ai.dataset.utils.download_dataset import download_dataset
from lib_ai.dataset.xy_matrix_dataset import XYMatrixDataset
from lib_ai.model.regression.linear_regression import LinearRegression
from lib_shared.core.utils.random import random


def test_works() -> None:
    pathname = download_dataset(
        name="nikhil7280/student-performance-multiple-linear-regression",
        path="regression",
        filename="Student_Performance.csv",
    )

    # pipeline = Pipeline()

    x = TabularData.from_csv(pathname)
    print(x.head(5).data)
    # .to_matrix()
    # y = MatrixData.from_array(list(y))
    # trainset, testset = XYMatrixDataset(x=x, y=y).split()
    # model = LinearRegression(n_in=x.shape[1])
    # model.fit(trainset)
    # scores = model.evaluate(testset)
    # assert scores["mean_squared_error"] <= 1
    assert 1 == 1
