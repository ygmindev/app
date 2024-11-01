import numpy as np
from lib_ai.data.array_data import ArrayData
from lib_ai.data.matrix_data import MatrixData
from lib_ai.data.tabular_data import TabularData
from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.transform.utils.transformer.min_max_scaler_transformer import (
    MinMaxScalerTransformer,
)


def test_works() -> None:
    transformer = MinMaxScalerTransformer()
    x = TabularData.from_dict({"a": [0, 0, 1, 1], "b": [1, 1, 0, 0]})
    dataset = XYDataset(x=x)
    dataset = transformer.fit_transform(dataset=dataset)
    answer = x.to_numpy()
    answer = (answer - answer.min(axis=0)) / (answer.max(axis=0) - answer.min(axis=0))
    answer = MatrixData.from_array(answer)
    assert dataset.x.to_matrix().equals(answer)
