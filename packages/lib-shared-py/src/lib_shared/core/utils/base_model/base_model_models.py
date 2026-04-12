# template version: 1.0.0


from enum import StrEnum
from typing import Any, Optional, Self


class MergeStrategy(StrEnum):
    APPEND = "append"
    PREPEND = "prepend"


class _BaseModelModel:
    def post_init(self): ...

    def clone(
        self,
        **kwargs: Any,
    ) -> Self: ...

    def update(
        self,
        value: Self,
        is_inplace: bool = False,
        merge_strategy: Optional[MergeStrategy] = None,
    ) -> Self: ...

    @classmethod
    def validate(cls, **kwargs) -> Self: ...


class BaseModelModel(_BaseModelModel): ...
