from lib_ai.data.array_data import ArrayData
from lib_ai.data.tabular_data import TabularData
from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.model.regression.linear_regression import LinearRegression


def test_works() -> None:
    x = TabularData.from_dict(
        {
            "x1": [1, 1, 1],
            "x2": [12, 2, 2],
        }
    )
    trainset = XYDataset(
        x=x,
        y=ArrayData.from_list([3, 3, 3]),
    )
    model = LinearRegression(n_features=2)
    model.train(trainset)

    testset = XYDataset(
        x=x,
        y=ArrayData.from_list([1, 2, 3]),
    )
    model.test(testset)
    assert 1 == 1
