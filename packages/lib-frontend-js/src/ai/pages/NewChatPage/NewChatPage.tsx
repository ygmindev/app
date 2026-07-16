import { AI } from '@lib/frontend/ai/ai.constants';
import { AiChatForm } from '@lib/frontend/ai/components/AiChatForm/AiChatForm';
import { type NewChatPagePropsModel } from '@lib/frontend/ai/pages/NewChatPage/NewChatPage.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FLEX_JUSTIFY } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import {
  FONT_ALIGN,
  FONT_STYLE,
} from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';
import { APP } from '@lib/shared/app/app.constants';
import { CHAT } from '@lib/shared/chat/chat.constants';

export const NewChatPage: LFCModel<NewChatPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation([AI]);
  const currentUser = useCurrentUser();
  const router = useRouter();
  return (
    <Wrapper
      {...wrapperProps}
      flex
      justify={FLEX_JUSTIFY.CENTER}
      p>
      <Wrapper s>
        <Text
          align={FONT_ALIGN.CENTER}
          fontStyle={FONT_STYLE.HEADLINE}>
          {t('ai:hello', { value: currentUser?.first ?? currentUser?.email })}
        </Text>

        <AiChatForm
          onSubscribe={(data) => {
            const chatId = data._id;
            chatId && router.push({ params: { chatId }, pathname: `/${APP}/${CHAT}` });
          }}
        />
      </Wrapper>
    </Wrapper>
  );
};
