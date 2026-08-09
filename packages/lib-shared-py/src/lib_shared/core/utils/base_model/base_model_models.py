# template version: 1.0.0


from typing import Any, Self

from lib_shared.core.utils.base_model.constants import ExportMode
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
        merge_strategy: MergeStrategy | None = None,
    ) -> Self: ...

    @classmethod
    def from_dict(
        cls: type[Self],
        data: dict[str, Any],
    ) -> Self: ...

    def to_dict(
        self,
        mode: ExportMode = ExportMode.JSON,
        exclude: set[str] | None = None,
    ) -> dict[str, Any]: ...


class BaseModelModel(_BaseModelModel): ...
