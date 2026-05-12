from typing import Any, Optional, Self

from lib_shared.core.utils.base_model.base_model_models import MergeStrategy


class _DataclassModel:
    def post_init(self: Self) -> None:
        return None

    def clone(
        self: Self,
        **kwargs: Any,
    ) -> Self: ...

    def update(
        self: Self,
        value: Self,
        is_inplace: bool = False,
        merge_strategy: Optional[MergeStrategy] = None,
    ) -> Self: ...


DataclassModel = _DataclassModel
