import numpy as np
from lib_ai.data.matrix_data import MatrixData
from lib_ai.data.tabular_data import TabularData
from lib_ai.transform.utils.transformer.standard_scaler_transformer import (
    StandardScalerTransformer,
)


def test_works() -> None:
    transformer = StandardScalerTransformer()
    data = TabularData.from_dict({"a": [0, 0, 1, 1], "b": [1, 1, 0, 0]})
    data = transformer.fit_transform(data=data)
    answer = data.to_numpy()
    answer = (answer - np.mean(answer, axis=0)) / np.std(answer, axis=0, ddof=1)
    answer = MatrixData.from_array(answer)
    assert data.to_matrix().equals(answer)
