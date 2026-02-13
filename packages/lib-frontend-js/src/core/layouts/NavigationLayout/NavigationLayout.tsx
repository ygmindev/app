import { AppHeader } from '@lib/frontend/app/containers/AppHeader/AppHeader';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { type NavigationLayoutPropsModel } from '@lib/frontend/core/layouts/NavigationLayout/NavigationLayout.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';

export const NavigationLayout: LFCModel<NavigationLayoutPropsModel> = ({
  children,
  footerElement,
  headerElement,
  routes,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper
      {...wrapperProps}
      flex
      s={THEME_SIZE.SMALL}>
      {headerElement ?? <AppHeader routes={routes} />}

      <Wrapper
        flex
        isVerticalScrollable>
        {children}
      </Wrapper>

      {footerElement}
    </Wrapper>
  );
};
