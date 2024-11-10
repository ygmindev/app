from lib_ai.data.tabular_data import TabularData
from lib_ai.transform.utils.transformer.label_encoder_transformer import (
    LabelEncoderTransformer,
)


def test_works() -> None:
    transformer = LabelEncoderTransformer()
    data = TabularData.from_dict({"str": ["a", "b", "c"]})
    data = transformer.fit_transform(data=data)
    assert data.equals(TabularData.from_dict({"str": [0, 1, 2]}))


def test_works_category() -> None:
    transformer = LabelEncoderTransformer(labels=[["c", "b", "a"]])
    data = TabularData.from_dict({"str": ["a", "b", "c"]})
    data = transformer.fit_transform(data=data)
    assert data.equals(TabularData.from_dict({"str": [2, 1, 0]}))
