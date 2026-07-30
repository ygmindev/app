from lib_model.core.utils.database_entity.database_entity import DatabaseEntity
from lib_model.core.utils.protected_resource.protected_resource_models import (
    ProtectedResourceModel,
)


class ProtectedResource(
    DatabaseEntity,
    ProtectedResourceModel,
): ...
