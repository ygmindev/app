import { type ResourceParamsModel } from '@lib/frontend/resource/resource.models';
import { EVENT_RESOURCE_NAME } from '@lib/model/kfn/Event/Event.constants';
import { type EventModel } from '@lib/model/kfn/Event/Event.models';
import { DATA_TYPE } from '@lib/shared/data/data.constants';

export const EVENT_RESOURCE_PARAMS = {
  fields: [
    { id: 'name' },
    { id: 'start', type: DATA_TYPE.DATE_TIME },
    { id: 'end', type: DATA_TYPE.DATE_TIME },
    { id: 'images' },
  ],
  name: EVENT_RESOURCE_NAME,
} satisfies ResourceParamsModel<EventModel>;
