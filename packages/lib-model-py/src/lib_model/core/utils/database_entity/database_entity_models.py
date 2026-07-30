from lib_shared.core.utils.base_model.base_model import BaseModel

from lib_model.core.utils.entity.entity_models import EntityModel


class _DatabaseEntityModel(
    EntityModel,
    BaseModel,
): ...


class DatabaseEntityModel(_DatabaseEntityModel): ...
