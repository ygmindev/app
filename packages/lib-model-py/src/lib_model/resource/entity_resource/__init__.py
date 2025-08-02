from beanie import Document

from lib_model.resource.entity_resource.entity_resource_models import (
    EntityResourceModel,
)


class EntityResource(Document, EntityResourceModel): ...
