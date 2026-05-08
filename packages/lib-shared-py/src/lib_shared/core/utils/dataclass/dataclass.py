from __future__ import annotations

from typing import (
    Any,
    Optional,
    Self,
)

from pydantic import BaseModel, ConfigDict

from lib_shared.core.utils.merge.merge_models import MergeStrategy

from .dataclass_models import DataclassModel, _DataclassModel


class _Dataclass(BaseModel, _DataclassModel):
    model_config = ConfigDict(
        arbitrary_types_allowed=True,
        extra="allow",
        populate_by_name=True,
        revalidate_instances="never",
        str_strip_whitespace=True,
    )

    def post_init(
        self: Self,
        *args,
    ) -> None:
        return None

    def model_post_init(
        self: Self,
        *args,
    ) -> None:
        return self.post_init()

    def _merge(
        self,
        current: Any,
        new: Any,
        merge_strategy: Optional[MergeStrategy] = None,
    ) -> Any:
        if isinstance(current, list) and isinstance(new, list):
            match merge_strategy:
                case MergeStrategy.DEEP_APPEND:
                    return current + new
                case MergeStrategy.DEEP_PREPEND:
                    return new + current
        return new

    def clone(
        self: Self,
        **kwargs: Any,
    ) -> Self:
        return self.model_copy(update=kwargs)

    def update(
        self: Self,
        value: Self,
        is_inplace: bool = False,
        merge_strategy: Optional[MergeStrategy] = None,
    ) -> Self:
        if is_inplace:
            for k, v in value:
                if hasattr(self, k):
                    current = getattr(self, k)
                    merged = self._merge(current, v, merge_strategy=merge_strategy)
                    setattr(self, k, merged)
            return self
        result = {}
        for k, v in value:
            current = getattr(self, k)
            result[k] = self._merge(current, v, merge_strategy=merge_strategy)
        return self.clone(**result)


class Dataclass(_Dataclass, DataclassModel): ...
