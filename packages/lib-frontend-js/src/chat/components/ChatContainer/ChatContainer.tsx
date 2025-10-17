import { type ChatContainerPropsModel } from '@lib/frontend/chat/components/ChatContainer/ChatContainer.models';
import { ChatForm } from '@lib/frontend/chat/components/ChatForm/ChatForm';
import { MessageContainer } from '@lib/frontend/chat/components/MessageContainer/MessageContainer';
import { useMessageResource } from '@lib/frontend/chat/hooks/useMessageResource/useMessageResource';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type MessageModel } from '@lib/model/chat/Message/Message.models';

export const ChatContainer: LFCModel<ChatContainerPropsModel> = ({
  chat,
  currentUser,
  messages,
  onSubmit,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const [currentUserState] = useStore('user.currentUser');
  const currentUserF = currentUser ?? currentUserState;

  // const handleAdd = async (message: Partial<MessageModel>): Promise<void> => onSubmit?.(message);
  const { create } = useMessageResource();
  const handleAdd = async (message: Partial<MessageModel>): Promise<void> => {
    await onSubmit?.(message);
    await create({
      form: { ...message, chat: { _id: chat._id }, createdBy: { _id: currentUserF?._id } },
    });
  };

  return (
    <MainLayout
      {...wrapperProps}
      bottomElement={<ChatForm onAdd={handleAdd} />}
      isFullHeight
      isFullWidth
      round>
      <Wrapper
        flex
        s>
        {messages?.map((message, i) => {
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
