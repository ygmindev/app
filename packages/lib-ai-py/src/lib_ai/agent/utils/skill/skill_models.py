# template version: 1.0.0


from typing import Sequence

from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field

from lib_ai.agent.utils.tool import Tool


class SkillModel(BaseModel):
    descriptions: Sequence[str] = Field(default_factory=list)
    name: str = Field()

    @property
    def tools(self) -> list[Tool]: ...
