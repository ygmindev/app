from typing import Any, Unpack, cast, overload

import torch
from lib_ai.core.utils.chunks._chunks_models import _ChunksModel, _ChunksParamsModel
from lib_shared.core.utils.indexable.indexable_models import (
    IndexableMultiKeyModel,
    IndexableSingleKeyModel,
)
from torch.utils.data import DataLoader, Dataset


def _chunks[T](**params: Unpack[_ChunksParamsModel[T]]) -> _ChunksModel[T]:
    data = params.get("data")
    chunk_size = params.get("chunk_size", len(data) / 5)

    class _Dataset(Dataset):
        def __init__(self, value) -> None:
            self._data = value

        @overload
        def __getitem__(self, key: IndexableSingleKeyModel) -> Any: ...

        @overload
        def __getitem__(self, key: IndexableMultiKeyModel) -> T: ...

        def __getitem__(self, key: IndexableSingleKeyModel | IndexableMultiKeyModel) -> Any | T:
            return self._data[key]

        def __getitems__(self, key: IndexableMultiKeyModel) -> T:
            return self._data[key]

        def __len__(self) -> int:
            return len(self._data)

    return cast(
        _ChunksModel[T],
        DataLoader(
            _Dataset(data),
            batch_size=chunk_size,
            collate_fn=None if torch.is_tensor(data) else lambda x: x,
        ),
    )
