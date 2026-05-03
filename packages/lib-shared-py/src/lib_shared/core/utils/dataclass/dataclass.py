from __future__ import annotations

from typing import Any, Callable, Optional, Self, Union, cast, get_args, get_origin

from pydantic import BaseModel, ConfigDict
from pydantic import Field as PydanticField

from lib_shared.core.utils.field.field import Field
from lib_shared.core.utils.inspect_class import inspect_class
from lib_shared.core.utils.merge.merge_models import MergeStrategy

from .dataclass_models import DataclassModel, TType


def is_optional(annotation: Any) -> bool:
    return get_origin(annotation) is Union and type(None) in get_args(annotation)


class _BaseClass(BaseModel):
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


def _Dataclass() -> Callable[[type[TType]], type[TType]]:
    def wrapper(cls: type[TType]) -> type[TType]:
        inspection = inspect_class(cls, is_deep=False)
        default_values = inspection["defaults"]
        defaults: dict[str, Any] = {}

        for k, v in inspection["annotations"].items():
            default = default_values.get(k)
            if isinstance(default, Field):
                default_value = default.default_value
                args: dict[str, Any] = {"description": default.description}
                if default_value:
                    if callable(default_value):
                        args["default_factory"] = default_value
                    else:
                        args["default"] = default_value
                defaults[k] = PydanticField(**args)
            elif default is not None:
                defaults[k] = PydanticField(default=default)
            elif is_optional(v):
                defaults[k] = PydanticField(default=None)

        ns = {
            "__annotations__": inspection["annotations"],
            "__module__": cls.__module__,
            "__qualname__": cls.__qualname__,
            **defaults,
        }
        if cls.__doc__:
            ns["__doc__"] = cls.__doc__

        bases = tuple(b for b in cls.__bases__ if b is not object)
        has_base = any(isinstance(b, type) and issubclass(b, _BaseClass) for b in bases)
        bases = bases if has_base else (_BaseClass,) + bases
        return cast(type[TType], type(cls.__name__, bases, ns))

    return wrapper


Dataclass: DataclassModel = _Dataclass
