import { type ChatContainerPropsModel } from '@lib/frontend/chat/components/ChatContainer/ChatContainer.models';
import { ChatForm } from '@lib/frontend/chat/components/ChatForm/ChatForm';
import { MessageContainer } from '@lib/frontend/chat/components/MessageContainer/MessageContainer';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';

export const ChatContainer: LFCModel<ChatContainerPropsModel> = ({
  chat,
  currentUser,
  onSubmit,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const [currentUserState] = useStore('user.currentUser');
  const currentUserF = currentUser ?? currentUserState;
  const messages = chat?.messages;
  return (
    <MainLayout
      {...wrapperProps}
      bottomElement={<ChatForm onAdd={onSubmit} />}
      isFullHeight
      isFullWidth
      round>
      <Wrapper
        flex
        s={THEME_SIZE.SMALL}>
        {messages &&
          messages.map((message, i) => {
            const isOwn = !!message?.createdBy && message?.createdBy?._id === currentUserF?._id;
            return (
              <MessageContainer
                isOwn={isOwn}
                key={message._id}
                message={message}
                messageNext={i === messages.length - 1 ? undefined : messages[i + 1]}
                messagePrevious={i === 0 ? undefined : messages[i - 1]}
              />
            );
          })}
      </Wrapper>
    </MainLayout>
  );
};
