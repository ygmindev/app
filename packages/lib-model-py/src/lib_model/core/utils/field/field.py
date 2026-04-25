from typing import Callable

import strawberry
from beanie import Document

from .field_models import FieldModel, TType


def _Field(
    _name: str,
    # _indices: list[str],
) -> Callable[[type[TType]], type[TType]]:
    def wrapper(cls: type[TType]) -> type[TType]:
        class Settings:
            name = _name
            # if _indices:
            #     indexes = _indices

        if not isinstance(cls, Document):
            cls = type(
                cls.__name__,
                (cls, Document),
                dict(cls.__dict__),
            )

        cls.Settings = Settings

        cls = strawberry.type(cls)

        return cls

    return wrapper


Field: FieldModel = _Field
