from typing import Self, Tuple, Unpack

from lib_ai.core.utils.split_indices import split_indices
from lib_ai.data.base_data.base_data_models import BaseDataModel, SplitParamsModel


class BaseData(BaseDataModel):
    def split(self, **params: Unpack[SplitParamsModel]) -> Tuple[Self, Self]:
        train_indices, test_indices = split_indices(
            n_rows=len(self),
            train_size=params.get("train_size", 0.8),
            shuffle=params.get("shuffle", False),
            stratify=params.get("stratify", None),
        )
        return self[train_indices], self[test_indices]
