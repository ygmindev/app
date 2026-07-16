import { AiChatContainer } from '@lib/frontend/ai/containers/AiChatContainer/AiChatContainer';
import {
  type ChatPageParamsModel,
  type ChatPagePropsModel,
} from '@lib/frontend/ai/pages/ChatPage/ChatPage.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const ChatPage: LFCModel<ChatPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const router = useRouter<ChatPageParamsModel>();
  const chatId = router.location.params?.chatId;
  if (!chatId) return null;
  return (
    <Wrapper
      {...wrapperProps}
      flex
      p>
      <AiChatContainer
        chatId={chatId}
        flex
      />
    </Wrapper>
  );
};
