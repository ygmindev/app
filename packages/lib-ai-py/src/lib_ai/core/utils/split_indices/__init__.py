from typing import Unpack

from lib_ai.core.utils.split_indices._split_indices import _split_indices
from lib_ai.core.utils.split_indices.split_indices_models import (
    SplitIndicesModel,
    SplitIndicesParamsModel,
)
from lib_shared.core.utils.merge import merge


def split_indices(**params: Unpack[SplitIndicesParamsModel]) -> SplitIndicesModel:
    return _split_indices(
        **merge(
            params,
            {
                "train_size": 0.8,
                "shuffle": True if params.get("stratify") else params.get("shuffle", False),
            },
        )
    )
