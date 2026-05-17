import { ChatContainer } from '@lib/frontend/chat/components/ChatContainer/ChatContainer';
import { type EntityChatContainerPropsModel } from '@lib/frontend/chat/components/EntityChatContainer/EntityChatContainer.models';
import { useMessageResource } from '@lib/frontend/chat/hooks/useMessageResource/useMessageResource';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type MessageModel } from '@lib/model/chat/Message/Message.models';

export const EntityChatContainer: LFCModel<EntityChatContainerPropsModel> = ({
  chat,
  currentUser,
  onSubmit,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const [currentUserState] = useStore('user.currentUser');
  const currentUserF = currentUser ?? currentUserState;

  const { create } = useMessageResource();
  const { valueControlled, valueControlledSet } = useValueControlled({ defaultValue: chat });

  const handleSubmit = async (message: Partial<MessageModel>): Promise<void> => {
    valueControlledSet({
      ...valueControlled,
      messages: [...(valueControlled?.messages ?? []), message],
    });
    // await create({
    //   form: {
    //     ...message,
    //     chat: { _id: valueControlled?._id },
    //     createdBy: { _id: currentUserF?._id },
    //   },
    // });
    await onSubmit?.(message);
  };
  console.warn(valueControlled);

  return (
    valueControlled && (
      <ChatContainer
        {...wrapperProps}
        chat={valueControlled}
        onSubmit={handleSubmit}
      />
    )
  );
};
