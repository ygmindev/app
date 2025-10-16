import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { useAppPhase } from '@lib/frontend/app/hooks/useAppPhase/useAppPhase';
import { APP_PHASE } from '@lib/frontend/app/hooks/useAppPhase/useAppPhase.constants';
import { TABS_TYPE } from '@lib/frontend/core/components/Tabs/Tabs.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useValueDelayed } from '@lib/frontend/core/hooks/useValueDelayed/useValueDelayed';
import { type RoutePropsModel } from '@lib/frontend/route/components/Route/Route.models';
import { TabLayout } from '@lib/frontend/route/components/TabLayout/TabLayout';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { ROUTE_NAVIGATION } from '@lib/frontend/route/route.constants';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR_MORE } from '@lib/frontend/style/style.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { cloneElement, useMemo } from 'react';

export const Route: LFCModel<RoutePropsModel> = ({ children, route, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { isMounted } = useRouter();
  const theme = useTheme();
  const isMountedF = useValueDelayed(isMounted, theme.animation.transition);
  const appPhase = useAppPhase();

  if (!route) {
    return null;
  }

  const element = useMemo(() => {
    let elementF = route?.element ?? (
      <Wrapper
        flex
        position={SHAPE_POSITION.RELATIVE}
      />
    );
    children && (elementF = cloneElement(elementF, { children }));

    switch (route?.transition) {
      default: {
        elementF = (
          <Appearable
            defaultState={
              appPhase == APP_PHASE.CLIENT_SIDE_NAVIGATION ? undefined : ELEMENT_STATE.ACTIVE
            }
            isAbsoluteFill
            isActive={isMounted}
            zIndex={isMounted ? true : undefined}>
            {elementF}
          </Appearable>
        );
        break;
      }
    }

    switch (route?.navigation) {
      case ROUTE_NAVIGATION.TAB: {
        const childTabs = route.routes?.find((v) => v.navigation === ROUTE_NAVIGATION.TAB);
        elementF = (
          <TabLayout
            route={route}
            type={childTabs ? TABS_TYPE.BUTTON : TABS_TYPE.UNDERLINE}>
            {elementF}
          </TabLayout>
        );
        break;
      }
    }
    return elementF;
  }, [appPhase, route, children, isMounted]);

  return (
    (isMounted || isMountedF) && (
      <Wrapper
        {...wrapperProps}
        backgroundColor={THEME_COLOR_MORE.SURFACE}
        isAbsoluteFill
        isVerticalScrollable
        zIndex>
        {element}
      </Wrapper>
    )
  );
};
