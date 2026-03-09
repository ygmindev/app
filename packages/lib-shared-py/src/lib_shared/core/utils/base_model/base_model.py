# template version: 1.0.0

from __future__ import annotations

from pydantic import BaseModel as PydanticBaseClass
from pydantic import ConfigDict

from .base_model_models import BaseModelModel, _BaseModelModel


class _BaseModel(PydanticBaseClass, _BaseModelModel):
    model_config = ConfigDict(
        arbitrary_types_allowed=True,
        extra="allow",
        populate_by_name=True,
        str_strip_whitespace=True,
    )


class BaseModel(_BaseModel, BaseModelModel): ...
