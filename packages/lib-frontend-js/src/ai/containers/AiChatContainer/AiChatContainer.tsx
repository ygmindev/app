import { AiChatForm } from '@lib/frontend/ai/components/AiChatForm/AiChatForm';
import { type AiChatContainerPropsModel } from '@lib/frontend/ai/containers/AiChatContainer/AiChatContainer.models';
import { useChat } from '@lib/frontend/ai/hooks/useChat/useChat';
import { ChatContainer } from '@lib/frontend/chat/components/ChatContainer/ChatContainer';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const AiChatContainer: LFCModel<AiChatContainerPropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { chat, currentMessage, isStreaming, subscribe, unsubscribe } = useChat({
    url: 'http://127.0.0.1:5010/api/ai',
  });
  return (
    <ChatContainer
      {...wrapperProps}
      chat={chat}
      chatFormElement={
        <AiChatForm
          isStreaming={isStreaming}
          onCancel={unsubscribe}
          onSubmit={async (data) => {
            void subscribe(data);
          }}
        />
      }
      currentMessage={currentMessage}
    />
  );
};
