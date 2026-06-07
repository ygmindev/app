# template version: 1.0.0

from lib_shared.core.utils.field.field import Field

from lib_model.core.utils.database_entity.database_entity import DatabaseEntity

from .{{MODULE}}(snakeCase)_constants import {{NAME}}(constantCase)_RESOURCE_NAME
from .{{MODULE}}(snakeCase)_models import {{NAME}}(pascalCase)Model


class {{NAME}}(pascalCase)(
    DatabaseEntity,
    {{NAME}}(pascalCase)Model,
    name={{NAME}}(constantCase)_RESOURCE_NAME,
):
    name: str = Field()
