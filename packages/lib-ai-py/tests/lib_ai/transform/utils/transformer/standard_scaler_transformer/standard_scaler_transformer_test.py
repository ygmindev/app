import numpy as np
from lib_ai.data.array_data import ArrayData
from lib_ai.data.matrix_data import MatrixData
from lib_ai.data.tabular_data import TabularData
from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.transform.utils.transformer.standard_scaler_transformer import (
    StandardScalerTransformer,
)


def test_works() -> None:
    transformer = StandardScalerTransformer()
    x = TabularData.from_dict({"a": [0, 0, 1, 1], "b": [1, 1, 0, 0]})
    dataset = XYDataset(x=x)
    dataset = transformer.fit_transform(dataset=dataset)
    answer = x.to_numpy()
    answer = (answer - np.mean(answer, axis=0)) / np.std(answer, axis=0, ddof=1)
    answer = MatrixData.from_array(answer)
    assert dataset.x.to_matrix().equals(answer)
