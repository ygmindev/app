import { AI } from '@lib/frontend/ai/ai.constants';
import { AiChatForm } from '@lib/frontend/ai/components/AiChatForm/AiChatForm';
import { type NewChatPagePropsModel } from '@lib/frontend/ai/pages/NewChatPage/NewChatPage.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { useHttp } from '@lib/frontend/http/hooks/useHttp/useHttp';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import {
  FONT_ALIGN,
  FONT_STYLE,
} from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import { type LlmPayloadModel } from '@lib/model/ai/LlmPayload/LlmPayload.models';
import { HTTP_RESPONSE_TYPE } from '@lib/shared/http/http.constants';

export const NewChatPage: LFCModel<NewChatPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation([AI]);
  const currentUser = useCurrentUser();
  const { post } = useHttp();

  const handleSubmit = async (data: Partial<LlmPayloadModel>) => {
    await post({
      onMessage: (data, messageType) => {
        console.warn(data);
      },
      params: data,
      request: { responseType: HTTP_RESPONSE_TYPE.STREAM },
      url: 'http://127.0.0.1:5010/api/ai',
    });
  };

  return (
    <MainLayout
      {...wrapperProps}
      flex
      s>
      <Text
        align={FONT_ALIGN.CENTER}
        fontStyle={FONT_STYLE.HEADLINE}>
        {t('ai:hello', { value: currentUser?.first ?? currentUser?.email })}
      </Text>

      <AiChatForm onSubmit={handleSubmit} />
    </MainLayout>
  );
};
