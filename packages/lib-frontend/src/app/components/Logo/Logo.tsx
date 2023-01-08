import { LOGO_SIZES } from '@lib/frontend/app/components/Logo/Logo.constants';
import type { LogoPropsModel } from '@lib/frontend/app/components/Logo/Logo.models';
import { Image } from '@lib/frontend/core/components/Image/Image';
import { Link } from '@lib/frontend/core/components/Link/Link';
import type { LinkPropsModel } from '@lib/frontend/core/components/Link/Link.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { APP_URI } from '@lib/frontend/http/http.constants';
import { THEME_BASIC_SIZE } from '@lib/frontend/style/style.constants';

export const Logo = composeComponent<LogoPropsModel, LinkPropsModel>({
  getComponent: () => Link,

  getProps: ({ size = THEME_BASIC_SIZE.MEDIUM }) => {
    const { height, width } = LOGO_SIZES[size];
    return {
      children: (
        <Image
          height={height}
          isAutoSize
          src={`${APP_URI}/assets/images/logos/logo.png`}
          width={width}
        />
      ),
      pathname: '/',
    };
  },
});
