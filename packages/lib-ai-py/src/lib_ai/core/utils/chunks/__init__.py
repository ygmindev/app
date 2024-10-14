from typing import Any, Unpack, overload

from lib_ai.core.utils.chunks.chunks_models import ChunksModel, ChunksParamsModel
from lib_shared.core.utils.indexable.indexable_models import (
    IndexableMultiKeyModel,
    IndexableSingleKeyModel,
)
from torch.utils.data import DataLoader, Dataset


def chunks[T](**params: Unpack[ChunksParamsModel[T]]) -> ChunksModel[T]:
    data = params.get("data")
    chunk_size = params.get("chunk_size", 1e3)

    class _Dataset(Dataset):
        def __init__(self, value) -> None:
            self._data = value

        @overload
        def __getitem__(self, key: IndexableSingleKeyModel) -> Any: ...

        @overload
        def __getitem__(self, key: IndexableMultiKeyModel) -> T: ...

        def __getitem__(self, key: IndexableSingleKeyModel | IndexableMultiKeyModel) -> Any | T:
            return self._data[key]

        def __len__(self) -> int:
            return len(self._data)

    return DataLoader(
        _Dataset(data),
        batch_size=chunk_size,
    )  # type: ignore
