import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { Slide } from '@lib/frontend/animation/components/Slide/Slide';
import { useAppPhase } from '@lib/frontend/app/hooks/useAppPhase/useAppPhase';
import { APP_PHASE } from '@lib/frontend/app/hooks/useAppPhase/useAppPhase.constants';
import { Protectable } from '@lib/frontend/auth/components/Protectable/Protectable';
import { Modal } from '@lib/frontend/core/components/Modal/Modal';
import { TABS_TYPE } from '@lib/frontend/core/components/Tabs/Tabs.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useValueDelayed } from '@lib/frontend/core/hooks/useValueDelayed/useValueDelayed';
import { type RoutePropsModel } from '@lib/frontend/route/components/Route/Route.models';
import { TabLayout } from '@lib/frontend/route/components/TabLayout/TabLayout';
import { RouteHeader } from '@lib/frontend/route/containers/RouteHeader/RouteHeader';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { ROUTE_NAVIGATION, ROUTE_TRANSITION } from '@lib/frontend/route/route.constants';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { cloneElement, useMemo } from 'react';

export const Route: LFCModel<RoutePropsModel> = ({ children, route, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { isMounted } = useRouter();
  const theme = useTheme();
  const isMountedDelayed = useValueDelayed(isMounted, theme.animation.transition);
  const appPhase = useAppPhase();

  const isLeaf = !route?.routes;
  const element = useMemo(() => {
    let elementF = route?.element ?? (
      <Wrapper
        flex
        position={SHAPE_POSITION.RELATIVE}
      />
    );

    children && (elementF = cloneElement(elementF, { children }));

    const defaultState = isMounted
      ? appPhase == APP_PHASE.CLIENT_SIDE_NAVIGATION
        ? undefined
        : ELEMENT_STATE.ACTIVE
      : undefined;

    switch (route?.transition) {
      case ROUTE_TRANSITION.SLIDE: {
        elementF = (
          <Slide
            animation={{ isInitial: false }}
            defaultState={defaultState}
            elementState={isMounted ? ELEMENT_STATE.ACTIVE : ELEMENT_STATE.EXIT}
            zIndex={isMountedDelayed ? true : undefined}>
            {elementF}
          </Slide>
        );
        break;
      }
      default: {
        if (isLeaf) {
          elementF = (
            <Appearable
              animation={{ isInitial: false }}
              defaultState={defaultState}
              isAbsoluteFill
              isActive={isMounted}
              zIndex={isMountedDelayed ? true : undefined}>
              {elementF}
            </Appearable>
          );
        }

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

    if (route?.transition === ROUTE_TRANSITION.MODAL) {
      elementF = (
        <Modal
          defaultState={defaultState}
          isFullSize
          isOpen={isMounted}
          isPortal={false}
          title={route.title}
          zIndex={isMountedDelayed ? true : undefined}>
          {elementF}
        </Modal>
      );
    }

    route?.isProtectable && (elementF = <Protectable>{elementF}</Protectable>);

    return elementF;
  }, [appPhase, route, children, isMounted]);

  return (
    (isMounted || isMountedDelayed) && (
      <Wrapper
        {...wrapperProps}
        flex
        isTransparent>
        {route?.header && <RouteHeader route={route} />}

        <Wrapper
          flex
          isVerticalScrollable
          position={SHAPE_POSITION.RELATIVE}>
          {element}
        </Wrapper>
      </Wrapper>
    )
  );
};
