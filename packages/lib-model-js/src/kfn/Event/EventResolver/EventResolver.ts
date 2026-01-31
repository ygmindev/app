import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { withResolver } from '@lib/backend/http/utils/withResolver/withResolver';
import { createEntityResourceResolver } from '@lib/backend/resource/utils/createEntityResourceResolver/createEntityResourceResolver';
import { ACCESS_LEVEL } from '@lib/model/auth/Access/Access.constants';
import { Event } from '@lib/model/kfn/Event/Event.entity';
import { EVENT_RESOURCE_NAME } from '@lib/model/kfn/Event/Event.constants';
import { type EventModel } from '@lib/model/kfn/Event/Event.models';
import { EventImplementation } from '@lib/model/kfn/Event/EventImplementation/EventImplementation';
import { type EventResolverModel } from '@lib/model/kfn/Event/EventResolver/EventResolver.models';

@withContainer()
@withResolver({ Resource: () => Event })
export class EventResolver
  extends createEntityResourceResolver<EventModel>({
    Resource: () => Event,
    ResourceImplementation: EventImplementation,
    access: { read: ACCESS_LEVEL.PUBLIC },
    name: EVENT_RESOURCE_NAME,
  })
  implements EventResolverModel {}
