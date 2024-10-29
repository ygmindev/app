from __future__ import annotations

from typing import Any, Sequence

from lib_ai.dataset.base_dataset.base_dataset_models import BaseDatasetModel
from lib_ai.transform.utils.transformer.base_transformer.base_transformer_models import (
    BaseTransformerModel,
)


class BasePipelineModel[TDataset: BaseDatasetModel](BaseTransformerModel[TDataset, Any]):
    def __init__(
        self,
        _transformers: Sequence[BaseTransformerModel[TDataset, Any]],
    ) -> None: ...
