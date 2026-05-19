import { AI } from '@lib/frontend/ai/ai.constants';
import { AiChatForm } from '@lib/frontend/ai/components/AiChatForm/AiChatForm';
import { type NewChatPagePropsModel } from '@lib/frontend/ai/pages/NewChatPage/NewChatPage.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import {
  FONT_ALIGN,
  FONT_STYLE,
} from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { useCurrentUser } from '@lib/frontend/user/hooks/useCurrentUser/useCurrentUser';

export const NewChatPage: LFCModel<NewChatPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation([AI]);
  const currentUser = useCurrentUser();
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

      <AiChatForm
        onSubmit={async (e) => {
          console.warn(e);
        }}
      />
    </MainLayout>
  );
};
