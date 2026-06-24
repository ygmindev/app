# template version: 1.0.0


from typing import Any, Optional, Self

from lib_shared.core.utils.merge.merge_models import MergeStrategy


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

    @classmethod
    def to_list(cls, value: list[Self]) -> list[dict]: ...

    def to_dict(self) -> dict[str, Any]: ...


class BaseModelModel(_BaseModelModel): ...
