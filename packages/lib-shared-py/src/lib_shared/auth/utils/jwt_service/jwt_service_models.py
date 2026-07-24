from lib_shared.core.utils.base_model.base_model import BaseModel
from lib_shared.core.utils.field.field import Field


class _JwtServiceModel(BaseModel):
    email: str = Field()
    project_id: str = Field()
    secret: str = Field()


class JwtServiceModel(_JwtServiceModel): ...
