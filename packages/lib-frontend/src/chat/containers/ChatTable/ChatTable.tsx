import { CHAT_TABLE_PROPS } from '@lib/frontend/chat/containers/ChatTable/ChatTable.constants';
import { type ChatTablePropsModel } from '@lib/frontend/chat/containers/ChatTable/ChatTable.models';
import { useChatResource } from '@lib/frontend/chat/hooks/useChatResource/useChatResource';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { ResourceTable } from '@lib/frontend/resource/components/ResourceTable/ResourceTable';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type ChatFormModel, type ChatModel } from '@lib/shared/chat/resources/Chat/Chat.models';

export const ChatTable: LFCModel<ChatTablePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const implementation = useChatResource();
  return (
    <ResourceTable<ChatModel, ChatFormModel>
      {...wrapperProps}
      {...CHAT_TABLE_PROPS}
      implementation={implementation}
    />
  );
};
