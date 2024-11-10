from typing import Self, Tuple, Unpack

from lib_ai.core.utils.split_indices import split_indices
from lib_ai.data.base_data.base_data_models import BaseDataModel, SplitParamsModel
from lib_shared.core.utils.get_item import get_item


class BaseData(BaseDataModel):
    def split(self, **params: Unpack[SplitParamsModel]) -> Tuple[Self, Self]:
        train_size = get_item(params, "train_size", 0.8)
        shuffle = get_item(params, "shuffle", False)
        stratify = get_item(params, "stratify", None)
        train_indices, test_indices = split_indices(
            n_rows=len(self),
            train_size=train_size,
            shuffle=shuffle,
            stratify=stratify,
        )
        return self[train_indices], self[test_indices]
