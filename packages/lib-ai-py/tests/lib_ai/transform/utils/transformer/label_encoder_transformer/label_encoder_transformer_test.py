import numpy as np
from lib_ai.data.array_data import ArrayData
from lib_ai.data.tabular_data import TabularData
from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.transform.utils.transformer.label_encoder_transformer import (
    LabelEncoderTransformer,
)


def test_works() -> None:
    transformer = LabelEncoderTransformer()
    x = TabularData.from_dict({"str": ["a", "b", "c"]})
    y = ArrayData(data=np.array([1, 2, 3]))
    dataset = XYDataset(x=x, y=y)
    dataset = transformer.fit_transform(dataset=dataset)
    assert dataset.x.equals(TabularData.from_dict({"str": [0, 1, 2]}))


def test_works_category() -> None:
    transformer = LabelEncoderTransformer(labels=[["c", "b", "a"]])
    x = TabularData.from_dict({"str": ["a", "b", "c"]})
    y = ArrayData(data=np.array([1, 2, 3]))
    dataset = XYDataset(x=x, y=y)
    dataset = transformer.fit_transform(dataset=dataset)
    assert dataset.x.equals(TabularData.from_dict({"str": [2, 1, 0]}))
