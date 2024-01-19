import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { type NotFoundPagePropsModel } from '@lib/frontend/route/pages/NotFoundPage/NotFoundPage.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { FONT_STYLE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';

export const NotFoundPage: SFCModel<NotFoundPagePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  const { t } = useTranslation();
  return (
    <Wrapper
      grow
      isCenter
      style={styles}
      testID={testID}>
      <Text fontStyle={FONT_STYLE.TITLE}>{t('core:notFound')}</Text>
    </Wrapper>
  );
};
