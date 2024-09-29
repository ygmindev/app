from typing import Any, Self, Sequence, Tuple, Unpack, overload

from lib_ai.core.utils.split_indices import split_indices
from lib_ai.data.data_models import DataModel, SplitParamsModel


class Data(DataModel):
    def split(self, **params: Unpack[SplitParamsModel]) -> Tuple[Self, Self]:
        train_indices, test_indices = split_indices(
            nrows=len(self),
            train_size=params.get("train_size"),
            shuffle=params.get("shuffle"),
            stratify=params.get("stratify"),
        )
        return self[train_indices], self[test_indices]
