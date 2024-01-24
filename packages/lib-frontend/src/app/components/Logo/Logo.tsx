import { type LogoPropsModel } from '@lib/frontend/app/components/Logo/Logo.models';
import { Link } from '@lib/frontend/core/components/Link/Link';
import { type LinkPropsModel } from '@lib/frontend/core/components/Link/Link.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';

export const Logo = composeComponent<LogoPropsModel, LinkPropsModel>({
  Component: Link,

  getProps: ({ size = THEME_SIZE.SMALL, src = '/images/logos/logo.png', ...props }, theme) => {
    return {
      children: <></>,
    };
    // // const height = isNumber(size) ? size : theme.shape.size[size];
    // const height = 22;
    // return {
    //   children: (
    //     <Image
    //       {...props}
    //       height={height}
    //       isAutoSize
    //       src={src}
    //     />
    //   ),
    //   pathname: '/',
    // };
  },
});

process.env.APP_IS_DEBUG && (Logo.displayName = variableName({ Logo }));
