import { type AiChatFormPropsModel } from '@lib/frontend/ai/components/AiChatForm/AiChatForm.models';
import { ChatForm } from '@lib/frontend/chat/components/ChatForm/ChatForm';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const AiChatForm: LFCModel<AiChatFormPropsModel> = ({ onSubmit, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <ChatForm
      {...wrapperProps}
      onSubmit={onSubmit}
    />
  );
};
