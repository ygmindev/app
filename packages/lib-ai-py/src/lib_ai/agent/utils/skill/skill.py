# template version: 1.0.0


from lib_ai.agent.utils.tool import Tool

from .skill_models import SkillModel


class Skill(SkillModel):
    @property
    def tools(self) -> list[Tool]:
        return []
