from lib_model.resource.entity_resource import EntityResource
from lib_model.kfn.event.event_models import EventModel


class Event(EntityResource, EventModel):
    ...
