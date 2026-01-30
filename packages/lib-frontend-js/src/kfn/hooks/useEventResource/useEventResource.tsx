import { type UseEventResourceModel } from '@lib/frontend/kfn/hooks/useEventResource/useEventResource.models';
import { EVENT_RESOURCE_PARAMS } from '@lib/frontend/kfn/resources/Event/Event.constants';
import { useResource } from '@lib/frontend/resource/hooks/useResource/useResource';
import { type EventModel } from '@lib/model/kfn/Event/Event.models';

export const useEventResource = (): UseEventResourceModel =>
  useResource<EventModel>({
    ...EVENT_RESOURCE_PARAMS,
  });
