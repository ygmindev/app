# template version: 1.0.0
from __future__ import annotations

from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field

from lib_model.chat.content.constants import ContentType


class ContentModel(BaseModel):
    content_type: ContentType | None = Field(default=None)
    value: str | None = Field(default=None)
