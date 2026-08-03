from typing import Sequence

from lib_ai.data.tabular_data import TabularData
from lib_ai.transform.utils.transformer.transformable.transformable_models import (
    TransformableModel,
)


class _LabelEncoderTransformerModel(
    TransformableModel[
        TabularData,
        None,
    ]
):
    labels: Sequence[Sequence[str]] | None = None


class LabelEncoderTransformerModel(_LabelEncoderTransformerModel): ...
