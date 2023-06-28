import { LOGO_SIZES } from '#lib-frontend/app/components/Logo/Logo.constants';
import type { LogoPropsModel } from '#lib-frontend/app/components/Logo/Logo.models';
import { Image } from '#lib-frontend/core/components/Image/Image';
import { Link } from '#lib-frontend/core/components/Link/Link';
import type { LinkPropsModel } from '#lib-frontend/core/components/Link/Link.models';
import { composeComponent } from '#lib-frontend/core/utils/composeComponent/composeComponent';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';
import { variableName } from '#lib-shared/core/utils/variableName/variableName';

export const Logo = composeComponent<LogoPropsModel, LinkPropsModel>({
  Component: Link,

  getProps: ({ size = THEME_SIZE.MEDIUM }) => {
    const { height, width } = LOGO_SIZES[size];
    return {
      children: (
        <Image
          height={height}
          isAutoSize
          // TODO: to config?
          src="/images/logos/logo.png"
          width={width}
        />
      ),
      pathname: '/',
    };
  },
});

process.env.APP_IS_DEBUG && (Logo.displayName = variableName({ Logo }));
