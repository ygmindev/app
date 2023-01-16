import type { OAuthRedirectPagePropsModel } from '@lib/frontend/auth/pages/OAuthRedirectPage/OAuthRedirectPage.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';

export const OAuthRedirectPage: SFCModel<OAuthRedirectPagePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  return (
    <Wrapper
      style={styles}
      testID={testID}>
      <Text>OAuthRedirectPage</Text>
    </Wrapper>
  );
};