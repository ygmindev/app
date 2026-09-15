# template version: 1.0.0


from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field

from lib_ai.agent.utils.tool import Tool


class Skill(BaseModel):
    descriptions: list[str] = Field(default_factory=list)
    name: str = Field()
    tools: list[Tool] = Field(default_factory=list)
