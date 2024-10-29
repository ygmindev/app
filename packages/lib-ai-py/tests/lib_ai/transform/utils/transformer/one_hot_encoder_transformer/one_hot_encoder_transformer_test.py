import numpy as np
from lib_ai.data.array_data import ArrayData
from lib_ai.data.tabular_data import TabularData
from lib_ai.dataset.xy_dataset import XYDataset
from lib_ai.transform.utils.transformer.one_hot_encoder_transformer import (
    OneHotEncoderTransformer,
)


def test_works() -> None:
    transformer = OneHotEncoderTransformer()
    x = TabularData.from_dict({"int": [1, 2, 3], "str": ["1", "2", "3"]})
    y = ArrayData(data=np.array([1, 2, 3]))
    dataset = XYDataset(x=x, y=y)
    print(dataset.x.data)

    dataset = transformer.fit_transform(dataset=dataset)
    print(dataset.x.data)
