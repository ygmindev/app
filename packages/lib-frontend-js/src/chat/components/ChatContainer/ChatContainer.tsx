import { type ChatContainerPropsModel } from '@lib/frontend/chat/components/ChatContainer/ChatContainer.models';
import { ChatForm } from '@lib/frontend/chat/components/ChatForm/ChatForm';
import { MessageContainer } from '@lib/frontend/chat/components/MessageContainer/MessageContainer';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import { MESSAGE_ROLE } from '@lib/model/ai/LlmPayload/LlmPayload.constants';
import { isEqual } from '@lib/shared/core/utils/isEqual/isEqual';

export const ChatContainer: LFCModel<ChatContainerPropsModel> = ({
  chat,
  chatFormElement,
  currentMessage,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const currentUser = useCurrentUser();
  const messages = chat?.messages;
  const authStatus = useStore('auth.status');
  return (
    <MainLayout
      {...wrapperProps}
      bottomElement={chatFormElement ?? <ChatForm />}
      isFullHeight
      isFullWidth
      round>
      <Wrapper
        flex
        s={THEME_SIZE.SMALL}>
        {messages?.map((message, i) => {
          const isOwn = authStatus
            ? !!message?.createdBy && message?.createdBy?._id === currentUser?._id
            : message.role === MESSAGE_ROLE.USER && isEqual(message?.createdBy, {});
          return (
            <MessageContainer
              isOwn={isOwn}
              key={message._id}
              message={message}
              messageNext={i === messages.length - 1 ? currentMessage : messages[i + 1]}
              messagePrevious={i === 0 ? undefined : messages[i - 1]}
            />
          );
        })}

        {currentMessage && (
          <MessageContainer
            message={currentMessage}
            messagePrevious={messages?.at(-1)}
          />
        )}
      </Wrapper>
    </MainLayout>
  );
};
