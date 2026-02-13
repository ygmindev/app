import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { createEntityResourceImplementation } from '@lib/backend/resource/utils/createEntityResourceImplementation/createEntityResourceImplementation';
import { EVENT_RESOURCE_NAME } from '@lib/model/kfn/Event/Event.constants';
import { Event } from '@lib/model/kfn/Event/Event.entity';
import { type EventModel } from '@lib/model/kfn/Event/Event.models';
import { type EventImplementationModel } from '@lib/model/kfn/Event/EventImplementation/EventImplementation.models';

@withContainer()
export class EventImplementation
  extends createEntityResourceImplementation<EventModel>({
    Resource: Event,
    name: EVENT_RESOURCE_NAME,
  })
  implements EventImplementationModel {}
