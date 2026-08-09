from typing import TypeVar

from lib_shared.core.utils.base_model.base_model import BaseModel

TType = TypeVar("TType")


class _EntityModel(BaseModel): ...


class EntityModel(_EntityModel): ...
