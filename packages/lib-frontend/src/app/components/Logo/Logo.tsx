import { LOGO_SIZES } from '@lib/frontend/app/components/Logo/Logo.constants';
import type { LogoPropsModel } from '@lib/frontend/app/components/Logo/Logo.models';
import { Image } from '@lib/frontend/core/components/Image/Image';
import { Link } from '@lib/frontend/core/components/Link/Link';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { APP_URI } from '@lib/frontend/http/http.constants';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { THEME_BASIC_SIZE } from '@lib/frontend/styling/utils/theme/theme.constants';

export const Logo: SFCModel<LogoPropsModel> = ({
  size = THEME_BASIC_SIZE.MEDIUM,
  testID,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const { height, width } = LOGO_SIZES[size];
  return (
    <Link
      pathname="/"
      style={styles}
      testID={testID}>
      <Image
        height={height}
        isAutoSize
        src={`${APP_URI}/assets/images/logos/logo.png`}
        width={width}
      />
    </Link>
  );
};
