# template version: 1.0.0

from __future__ import annotations

from typing import Any, ClassVar, Self

from pydantic import BaseModel as PydanticBaseClass
from pydantic import ConfigDict

from lib_shared.core.utils.base_model.constants import ExportMode
from lib_shared.core.utils.merge.merge_models import MergeStrategy


class _BaseModel(PydanticBaseClass):
    model_config = ConfigDict(
        arbitrary_types_allowed=True,
        extra="allow",
        populate_by_name=True,
        revalidate_instances="never",
        str_strip_whitespace=False,
        use_enum_values=True,
    )

    _registry: ClassVar[dict[str, type[_BaseModel]]] = {}

    @classmethod
    def __pydantic_init_subclass__(cls, **kwargs: Any) -> None:
        super().__pydantic_init_subclass__(**kwargs)
        _BaseModel._registry[cls.__name__] = cls

    @classmethod
    def rebuild(cls) -> None:
        for model_cls in cls._registry.values():
            model_cls.model_rebuild(_types_namespace=cls._registry, force=True)

    def post_init(self) -> None: ...

    def model_post_init(self, __context: Any) -> None:
        return self.post_init()

    def clone(self, **kwargs: Any) -> Self:
        return self.model_copy(update=kwargs)

    def update(
        self,
        value: Self,
        is_inplace: bool = False,
        merge_strategy: MergeStrategy | None = None,
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
            current = getattr(self, k, None)
            result[k] = self._merge(current, v, merge_strategy=merge_strategy)

        return self.clone(**result)

    def _merge(
        self,
        current: Any,
        new: Any,
        merge_strategy: MergeStrategy | None = None,
    ) -> Any:
        if isinstance(current, list) and isinstance(new, list):
            match merge_strategy:
                case MergeStrategy.DEEP_APPEND:
                    return current + new
                case MergeStrategy.DEEP_PREPEND:
                    return new + current
            return new
        return new

    @classmethod
    def from_dict(
        cls: type[Self],
        data: dict[str, Any],
    ) -> Self:
        return cls.model_validate(data)

    def to_dict(
        self,
        mode: ExportMode = ExportMode.JSON,
        exclude: set[str] | None = None,
    ) -> dict[str, Any]:
        return self.model_dump(
            mode=mode.value,
            exclude=exclude,
        )


class BaseModel(_BaseModel): ...
