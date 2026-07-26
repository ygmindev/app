import { type ChatContainerPropsModel } from '@lib/frontend/chat/components/ChatContainer/ChatContainer.models';
import { ChatForm } from '@lib/frontend/chat/components/ChatForm/ChatForm';
import { MessageContainer } from '@lib/frontend/chat/components/MessageContainer/MessageContainer';
import { StreamingChatContainer } from '@lib/frontend/chat/components/StreamingChatContainer/StreamingChatContainer';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type WrapperRefModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { type MeasureModel, type LFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import { MESSAGE_ROLE } from '@lib/model/ai/LlmPayload/LlmPayload.constants';
import { type MessageModel } from '@lib/model/chat/Message/Message.models';
import { isEqual } from '@lib/shared/core/utils/isEqual/isEqual';
import { cloneElement, useRef, useState, type ReactElement } from 'react';

export const ChatContainer: LFCModel<ChatContainerPropsModel> = ({
  chat,
  chatFormElement,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const currentUser = useCurrentUser();
  const messages = chat?.messages;
  const authStatus = useStore('auth.status');
  const [measure, measureSet] = useState<MeasureModel>();
  const [measureMain, measureMainSet] = useState<MeasureModel>();
  const ref = useRef<WrapperRefModel>(null);

  const chatElement = (message: Partial<MessageModel>): ReactElement => {
    const isOwn = authStatus
      ? !!message?.createdBy && message?.createdBy?._id === currentUser?._id
      : message.role === MESSAGE_ROLE.USER && isEqual(message?.createdBy, {});
    return (
      <MessageContainer
        isOwn={isOwn}
        key={message._id}
        message={message}
      />
    );
  };

  let bottomElement = chatFormElement ?? <ChatForm />;
  const { onSubmit } = bottomElement.props;
  bottomElement = cloneElement(bottomElement, {
    onSubmit: async (data: Partial<MessageModel>): Promise<void> => {
      ref.current?.scrollTo({ y: (measureMain?.height ?? 0) + (measure?.height ?? 0) });
      await onSubmit?.(data);
    },
  });

  return (
    <MainLayout
      {...wrapperProps}
      bottomElement={bottomElement}
      flex
      isFullHeight
      isFullWidth
      onMeasure={measureMainSet}
      ref={ref}
      s={THEME_SIZE.SMALL}>
      <Wrapper onMeasure={measureSet}>{messages?.map(chatElement)}</Wrapper>

      <Wrapper minHeight={measureMain?.height}>
        {chat?._id && <StreamingChatContainer chatId={chat._id} />}
      </Wrapper>
    </MainLayout>
  );
};
