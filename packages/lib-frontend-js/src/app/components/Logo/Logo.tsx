import { type LogoPropsModel } from '@lib/frontend/app/components/Logo/Logo.models';
import { Image } from '@lib/frontend/core/components/Image/Image';
import { Link } from '@lib/frontend/core/components/Link/Link';
import { type LinkPropsModel } from '@lib/frontend/core/components/Link/Link.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { fromAssets } from '@lib/frontend/core/utils/fromAssets/fromAssets';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import isNumber from 'lodash/isNumber';

export const Logo = composeComponent<LogoPropsModel, LinkPropsModel>({
  Component: Link,

  getProps: (
    // TODO: CDN src for production
    { size = THEME_SIZE.SMALL, src = fromAssets('images/logos/logo.png'), ...props },
    theme,
  ) => {
    const height = isNumber(size) ? size : theme.shape.size[size];
    return {
      children: (
        <Image
          {...props}
          height={height}
          isAutoSize
          src={src}
        />
      ),
      pathname: '/',
    };
  },
});
