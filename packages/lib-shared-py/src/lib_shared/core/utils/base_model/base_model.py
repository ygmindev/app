# template version: 1.0.0

from __future__ import annotations

from typing import Any, Optional, Self

from pydantic import BaseModel as PydanticBaseClass
from pydantic import ConfigDict

from .base_model_models import BaseModelModel, MergeStrategy, _BaseModelModel


class _BaseModel(PydanticBaseClass, _BaseModelModel):
    model_config = ConfigDict(
        arbitrary_types_allowed=True,
        extra="allow",
        populate_by_name=True,
        revalidate_instances="never",
        str_strip_whitespace=True,
    )

    def model_post_init(
        self,
        *args,
    ) -> None:
        return self.post_init()

    def clone(
        self,
        **kwargs: Any,
    ) -> Self:
        return self.model_copy(update=kwargs)

    def update(
        self,
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

    def _merge(
        self,
        current: Any,
        new: Any,
        merge_strategy: Optional[MergeStrategy] = None,
    ) -> Any:
        if isinstance(current, list) and isinstance(new, list):
            match merge_strategy:
                case MergeStrategy.APPEND:
                    return current + new
                case MergeStrategy.PREPEND:
                    return new + current
            return new

    @classmethod
    def validate(cls, **kwargs) -> Self:
        return cls.model_validate(kwargs)


class BaseModel(_BaseModel, BaseModelModel): ...
