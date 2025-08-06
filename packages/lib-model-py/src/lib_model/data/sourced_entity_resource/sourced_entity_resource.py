from __future__ import annotations

import attr
from pydantic import ConfigDict

from lib_model.resource.entity_resource.entity_resource_models import (
    EntityResourceModel,
)


@attr.s(auto_attribs=True, kw_only=True)
class SourcedEntityResourceModel(EntityResourceModel):
    source: str

    model_config = ConfigDict(
        extra="allow",
    )
