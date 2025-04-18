import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { type NotFoundPagePropsModel } from '@lib/frontend/route/pages/NotFoundPage/NotFoundPage.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { FONT_STYLE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';

export const NotFoundPage: LFCModel<NotFoundPagePropsModel> = ({ ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { t } = useTranslation();
  return (
    <Wrapper
      {...wrapperProps}
      flex
      isCenter>
      <Text fontStyle={FONT_STYLE.TITLE}>{t('core:notFound')}</Text>
    </Wrapper>
  );
};
