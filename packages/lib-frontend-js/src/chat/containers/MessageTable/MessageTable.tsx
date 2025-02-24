import { type LFCModel } from '@lib/frontend/core/core.models';
import { type MessageTablePropsModel } from '@lib/frontend/chat/containers/MessageTable/MessageTable.models';
import { useMessageResource } from '@lib/frontend/chat/hooks/useMessageResource/useMessageResource';
import { MESSAGE_RESOURCE_PARAMS } from '@lib/frontend/chat/resources/Message/Message.constants';
import { ResourceTable } from '@lib/frontend/resource/components/ResourceTable/ResourceTable';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import {
  type MessageFormModel,
  type MessageModel,
} from '@lib/shared/chat/resources/Message/Message.models';

export const MessageTable: LFCModel<MessageTablePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const implementation = useMessageResource();
  return (
    <ResourceTable<MessageModel, MessageFormModel>
      {...wrapperProps}
      {...MESSAGE_RESOURCE_PARAMS}
      implementation={implementation}
    />
  );
};
