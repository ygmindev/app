import { type OAuthRedirectPagePropsModel } from '@lib/frontend/auth/pages/OAuthRedirectPage/OAuthRedirectPage.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type SFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';

export const OAuthRedirectPage: SFCModel<OAuthRedirectPagePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  const { t } = useTranslation();
  return (
    <Wrapper
      style={styles}
      testID={testID}>
      <Text>{t('auth:redirect')}</Text>
    </Wrapper>
  );
};
