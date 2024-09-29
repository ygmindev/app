from typing import Unpack

from lib_ai.core.utils.split_indices._split_indices import _split_indices
from lib_ai.core.utils.split_indices.split_indices_models import (
    SplitIndicesModel,
    SplitIndicesParamsModel,
)


def split_indices(**params: Unpack[SplitIndicesParamsModel]) -> SplitIndicesModel:
    return _split_indices(
        **{
            **params,
            "ratio": params.get("ratio", 0.8),
            "shuffle": True if params.get("stratify") else params.get("shuffle", False),
        }
    )
