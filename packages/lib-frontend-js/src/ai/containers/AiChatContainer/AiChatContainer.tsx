import { AiChatForm } from '@lib/frontend/ai/components/AiChatForm/AiChatForm';
import { type AiChatContainerPropsModel } from '@lib/frontend/ai/containers/AiChatContainer/AiChatContainer.models';
import { useChat } from '@lib/frontend/ai/hooks/useChat/useChat';
import { ChatContainer } from '@lib/frontend/chat/components/ChatContainer/ChatContainer';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type MessageModel } from '@lib/model/chat/Message/Message.models';
import { uri } from '@lib/shared/http/utils/uri/uri';
import { useCallback } from 'react';

export const AiChatContainer: LFCModel<AiChatContainerPropsModel> = ({ onSubmit, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { chat, currentMessage, isStreaming, subscribe, unsubscribe } = useChat({
    url: uri({
      host: process.env.SERVER_APP_PYTHON_HOST,
      pathname: '/api/ai',
      port: process.env.SERVER_APP_PYTHON_PORT,
    }),
  });

  const handleSubmit = useCallback(
    async (data: Partial<MessageModel>) => {
      subscribe(data);
      await onSubmit?.(data);
    },
    [subscribe],
  );

  return (
    <ChatContainer
      {...wrapperProps}
      chat={chat}
      chatFormElement={
        <AiChatForm
          isStreaming={isStreaming}
          onCancel={unsubscribe}
          onSubmit={handleSubmit}
        />
      }
      currentMessage={currentMessage}
      flex
    />
  );
};
