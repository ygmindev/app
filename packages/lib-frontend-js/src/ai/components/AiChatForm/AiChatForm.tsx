import { AI } from '@lib/frontend/ai/ai.constants';
import { type AiChatFormPropsModel } from '@lib/frontend/ai/components/AiChatForm/AiChatForm.models';
import { ChatForm } from '@lib/frontend/chat/components/ChatForm/ChatForm';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';

export const AiChatForm: LFCModel<AiChatFormPropsModel> = ({ onSubmit, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation([AI]);
  return (
    <ChatForm
      {...wrapperProps}
      onSubmit={onSubmit}
      placeholder={t('ai:howCanIHelpYouToday')}
    />
  );
};
