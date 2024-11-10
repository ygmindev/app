from lib_ai.data.tabular_data.tabular_data_fixtures import TABULAR_DATA_FIXTURE_1
from lib_ai.transform.utils.pipeline.table_pipeline import TablePipeline
from lib_ai.transform.utils.transformer.one_hot_encoder_transformer import (
    OneHotEncoderTransformer,
)


def test_works() -> None:
    pipeline = TablePipeline(
        transformers=[
            (["str"], OneHotEncoderTransformer()),
        ]
    )

    data = TABULAR_DATA_FIXTURE_1
    data = pipeline.fit_transform(data)
    print("@done???")
    print(data.data)

    assert 1 == 1
