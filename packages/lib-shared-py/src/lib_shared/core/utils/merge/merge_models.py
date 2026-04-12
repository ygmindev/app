from enum import StrEnum
from typing import Protocol, Sequence, TypeVar


class MergeStrategy(StrEnum):
    DEEP = "deep"
    DEEP_APPEND = "deep_append"
    DEEP_PREPEND = "deep_prepend"


TType = TypeVar("TType", bound=dict)


class _MergeModel(Protocol[TType]):
    def __call__(
        self,
        params: Sequence[TType],
        merge_strategy: MergeStrategy,
    ) -> TType: ...


MergeModel = _MergeModel
