from typing import Sequence

from lib_ai.data.table_data import TableData
from lib_ai.transform.utils.transformer.transformable.transformable_models import (
    TransformableModel,
)


class _LabelEncoderTransformerModel(
    TransformableModel[
        TableData,
        None,
    ]
):
    labels: Sequence[Sequence[str]] | None = None


class LabelEncoderTransformerModel(_LabelEncoderTransformerModel): ...
