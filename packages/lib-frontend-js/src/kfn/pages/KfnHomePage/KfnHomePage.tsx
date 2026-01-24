import { Logo } from '@lib/frontend/app/components/Logo/Logo';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type FCModel } from '@lib/frontend/core/core.models';
import { type KfnHomePagePropsModel } from '@lib/frontend/kfn/pages/KfnHomePage/KfnHomePage.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { FONT_STYLE } from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { KFN } from '@lib/shared/kfn/constants';

export const KfnHomePage: FCModel<KfnHomePagePropsModel> = () => {
  const { t } = useTranslation([KFN]);
  const theme = useTheme();
  return (
    <Wrapper
      flex
      isCenter
      p
      s>
      <Logo src={`/images/logos/kpn_logo${theme.color.isDark ? '_dark' : ''}.png`} />

      <Text fontStyle={FONT_STYLE.HEADLINE}>{t('kfn:koreanFinanceNetwork')}</Text>
    </Wrapper>
  );
};
