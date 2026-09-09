# template version: 1.0.0


from lib_shared.core.utils.base_model import BaseModel
from lib_shared.core.utils.field.field import Field


class Orchestrator(BaseModel):
    name: str = Field()
