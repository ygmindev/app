import { AI } from '@lib/frontend/ai/ai.constants';
import { type AiChatFormPropsModel } from '@lib/frontend/ai/components/AiChatForm/AiChatForm.models';
import { useChat } from '@lib/frontend/ai/hooks/useChat/useChat';
import { ChatForm } from '@lib/frontend/chat/components/ChatForm/ChatForm';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { type MessageModel } from '@lib/model/chat/Message/Message.models';
import { uri } from '@lib/shared/http/utils/uri/uri';
import { useCallback } from 'react';

export const AiChatForm: LFCModel<AiChatFormPropsModel> = ({
  chatId,
  onStart,
  onSubscribe,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation([AI]);

  const { isStreaming, subscribe, unsubscribe } = useChat({
    chatId,
    onStart,
    onSubscribe,
    url: uri({
      host: process.env.SERVER_APP_PYTHON_HOST,
      pathname: '/api/ai',
      port: process.env.SERVER_APP_PYTHON_PORT,
    }),
  });

  const handleSubmit = useCallback(
    async (data: Partial<MessageModel>) => {
      void subscribe(data);
    },
    [subscribe],
  );

  return (
    <ChatForm
      {...wrapperProps}
      elementState={isStreaming ? ELEMENT_STATE.LOADING : undefined}
      onCancel={unsubscribe}
      onSubmit={handleSubmit}
      placeholder={t('ai:howCanIHelpYouToday')}
    />
  );
};
