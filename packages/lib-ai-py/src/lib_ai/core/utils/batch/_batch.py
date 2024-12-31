from typing import Any, Unpack, cast

import torch
from lib_ai.core.utils.batch._batch_models import _BatchModel, _BatchParamsModel
from lib_shared.core.utils.get_item import get_item
from torch.utils.data import DataLoader, Dataset


def _batch[T](**params: Unpack[_BatchParamsModel[T]]) -> _BatchModel[T]:
    data = get_item(params, "data")
    batch_size = get_item(params, "batch_size", len(data) / 5)

    class _Dataset(Dataset):
        def __init__(self, value) -> None:
            self._data = value

        def __getitem__(self, key: Any) -> T:
            return self._data[key]

        def __len__(self) -> int:
            return len(self._data)

    return cast(
        _BatchModel[T],
        DataLoader(
            _Dataset(data),
            batch_size=batch_size,
            collate_fn=None if torch.is_tensor(data) else lambda x: x,
        ),
    )
