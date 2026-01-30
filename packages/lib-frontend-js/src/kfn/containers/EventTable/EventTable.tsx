import { type LFCModel } from '@lib/frontend/core/core.models';
import { type EventTablePropsModel } from '@lib/frontend/kfn/containers/EventTable/EventTable.models';
import { useEventResource } from '@lib/frontend/kfn/hooks/useEventResource/useEventResource';
import { EVENT_RESOURCE_PARAMS } from '@lib/frontend/kfn/resources/Event/Event.constants';
import { ResourceTable } from '@lib/frontend/resource/components/ResourceTable/ResourceTable';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import {
  type EventModel,
} from '@lib/model/kfn/Event/Event.models';

export const EventTable: LFCModel<EventTablePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const implementation = useEventResource();
  return (
    <ResourceTable<EventModel>
      {...wrapperProps}
      {...EVENT_RESOURCE_PARAMS}
      implementation={implementation}
    />
  );
};
