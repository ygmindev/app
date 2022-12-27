import type { LogoPropsModel } from '@lib/frontend/app/components/Logo/Logo.models';
import { Link } from '@lib/frontend/core/components/Link/Link';
import { Text } from '@lib/frontend/core/components/Text/Text';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';

export const Logo: SFCModel<LogoPropsModel> = ({ size = THEME_SIZE.MEDIUM, testID, ...props }) => {
  const { styles } = useStyles({ props });
  return (
    <Link
      pathname="/"
      style={styles}
      testID={testID}>
      <Text>Logo</Text>
    </Link>
  );
};
