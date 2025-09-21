import { type ChatContainerPropsModel } from '@lib/frontend/chat/components/ChatContainer/ChatContainer.models';
import { ChatForm } from '@lib/frontend/chat/components/ChatForm/ChatForm';
import { MessageContainer } from '@lib/frontend/chat/components/MessageContainer/MessageContainer';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';

export const ChatContainer: LFCModel<ChatContainerPropsModel> = ({ messages, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const theme = useTheme();
  const { t } = useTranslation();
  const [currentUser] = useStore('user.currentUser');
  return (
    <MainLayout
      {...wrapperProps}
      bottomElement={<ChatForm />}
      isFullHeight
      isFullWidth
      minHeight={200}
      p
      round>
      <Wrapper
        flex
        s={THEME_SIZE.SMALL}>
        {messages?.map((message) => (
          <MessageContainer
            key={message._id}
            message={message}
          />
        ))}
      </Wrapper>
    </MainLayout>
  );
};
