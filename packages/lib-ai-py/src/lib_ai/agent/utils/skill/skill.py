# template version: 1.0.0


from typing import Sequence

from lib_shared.core.utils.base_model import BaseModel

from lib_ai.agent.utils.tool import Tool

from .skill_models import SkillModel


class Skill(BaseModel, SkillModel):
    descriptions: Sequence[str]
    name: str

    @property
    def tools(self) -> list[Tool]:
        return []
