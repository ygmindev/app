import numpy as np
from lib_ai.data.array_data import ArrayData
from lib_ai.data.tabular_data import TabularData
from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.transform.utils.transformer.one_hot_encoder_transformer import (
    OneHotEncoderTransformer,
)


def test_works() -> None:
    transformer = OneHotEncoderTransformer()
    x = TabularData.from_dict({"int": [1, 2, 3], "str": ["a", "b", "c"]})
    y = ArrayData(data=np.array([1, 2, 3]))
    dataset = XYDataset(x=x, y=y)
    dataset = transformer.fit_transform(dataset=dataset)
    assert dataset.x.equals(
        TabularData.from_dict(
            {
                "int_1": [1, 0, 0],
                "int_2": [0, 1, 0],
                "int_3": [0, 0, 1],
                "str_a": [1, 0, 0],
                "str_b": [0, 1, 0],
                "str_c": [0, 0, 1],
            }
        )
    )


def test_works_is_sparse() -> None:
    transformer = OneHotEncoderTransformer(is_sparse=True)
    x = TabularData.from_dict({"int": [1, 2, 3], "str": ["a", "b", "c"]})
    y = ArrayData(data=np.array([1, 2, 3]))
    dataset = XYDataset(x=x, y=y)
    dataset = transformer.fit_transform(dataset=dataset)
    assert dataset.x.equals(
        TabularData.from_dict(
            {
                "int_2": [0, 1, 0],
                "int_3": [0, 0, 1],
                "str_b": [0, 1, 0],
                "str_c": [0, 0, 1],
            }
        )
    )
