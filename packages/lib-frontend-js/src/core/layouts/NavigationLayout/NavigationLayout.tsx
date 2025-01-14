import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { type NavigationLayoutPropsModel } from '@lib/frontend/core/layouts/NavigationLayout/NavigationLayout.models';
import { RouteTabs } from '@lib/frontend/route/containers/RouteTabs/RouteTabs';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';

export const NavigationLayout: LFCModel<NavigationLayoutPropsModel> = ({
  children,
  route,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  return (
    <Wrapper
      {...wrapperProps}
      flex
      p={!route?.depth}
      s={THEME_SIZE.SMALL}>
      <RouteTabs
        depth={route?.depth}
        routes={route?.routes ?? []}
      />

      <Wrapper
        flex
        isVerticalScrollable>
        {children}
      </Wrapper>
    </Wrapper>
  );
};
