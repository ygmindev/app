from __future__ import annotations

from typing import Unpack

from lib_ai.core.utils.chunks._chunks import _chunks
from lib_ai.core.utils.chunks.chunks_models import ChunksModel, ChunksParamsModel


def chunks[T](**params: Unpack[ChunksParamsModel[T]]) -> ChunksModel[T]:
    return _chunks(**params)
