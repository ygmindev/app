from __future__ import annotations

from lib_ai.data.base_data import BaseData
from lib_ai.transform.utils.transformer.base_transformer.base_transformer_models import (
    BaseTransformerModel,
)


class BasePipelineModel[TData: BaseData](
    BaseTransformerModel[
        TData,
        None,
    ]
): ...
