from lib_ai.data.matrix_data import MatrixData
from lib_ai.data.tabular_data import TabularData
from lib_ai.transform.utils.transformer.min_max_scaler_transformer import (
    MinMaxScalerTransformer,
)


def test_works() -> None:
    transformer = MinMaxScalerTransformer()
    data = TabularData.from_dict({"a": [0, 0, 1, 1], "b": [1, 1, 0, 0]})
    data = transformer.fit_transform(data=data)
    answer = data.to_numpy()
    answer = (answer - answer.min(axis=0)) / (answer.max(axis=0) - answer.min(axis=0))
    answer = MatrixData.from_array(answer)
    assert data.to_matrix().equals(answer)
