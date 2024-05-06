import { type LFCModel } from '@lib/frontend/core/core.models';
import { SOCKET_TABLE_PROPS } from '@lib/frontend/http/containers/SocketTable/SocketTable.constants';
import { type SocketTablePropsModel } from '@lib/frontend/http/containers/SocketTable/SocketTable.models';
import { useSocketResource } from '@lib/frontend/http/hooks/useSocketResource/useSocketResource';
import { ResourceTable } from '@lib/frontend/resource/components/ResourceTable/ResourceTable';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type ChatModel } from '@lib/shared/chat/resources/Chat/Chat.models';
import {
  type SocketFormModel,
  type SocketModel,
} from '@lib/shared/http/resources/Socket/Socket.models';

export const SocketTable: LFCModel<SocketTablePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const implementation = useSocketResource();
  return (
    <ResourceTable<SocketModel, SocketFormModel, ChatModel>
      {...wrapperProps}
      {...SOCKET_TABLE_PROPS}
      implementation={implementation}
    />
  );
};
