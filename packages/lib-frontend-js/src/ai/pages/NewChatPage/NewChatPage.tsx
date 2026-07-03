import { AI } from '@lib/frontend/ai/ai.constants';
import { AiChatContainer } from '@lib/frontend/ai/containers/AiChatContainer/AiChatContainer';
import { type NewChatPagePropsModel } from '@lib/frontend/ai/pages/NewChatPage/NewChatPage.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FLEX_JUSTIFY } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
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

        <AiChatContainer flex />
      </Wrapper>
    </Wrapper>
  );
};
