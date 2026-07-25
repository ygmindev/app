import { AiChatForm } from '@lib/frontend/ai/components/AiChatForm/AiChatForm';
import { type AiChatContainerPropsModel } from '@lib/frontend/ai/containers/AiChatContainer/AiChatContainer.models';
import { useChat } from '@lib/frontend/ai/hooks/useChat/useChat';
import { ChatContainer } from '@lib/frontend/chat/components/ChatContainer/ChatContainer';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { uri } from '@lib/shared/http/utils/uri/uri';

export const AiChatContainer: LFCModel<AiChatContainerPropsModel> = ({
  chatId,
  onSubmit,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { chat, currentMessage } = useChat({
    chatId,
    url: uri({
      host: process.env.SERVER_APP_PYTHON_HOST,
      pathname: '/api/ai',
      port: process.env.SERVER_APP_PYTHON_PORT,
    }),
  });

  return (
    <ChatContainer
      {...wrapperProps}
      chat={chat}
      chatFormElement={
        <AiChatForm
          chatId={chatId}
          onSubmit={onSubmit}
        />
      }
      currentMessage={currentMessage}
      flex
    />
  );
};
