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
import { cloneElement } from 'react';

export const Route: LFCModel<RoutePropsModel> = ({
  children,
  isMounted: isMountedOverride,
  route,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { isActive, isMounted, location, push } = useRouter();
  const isMountedF = isMountedOverride ?? isMounted;
  const theme = useTheme();

  const isMountedDelayed = useValueDelayed(isMountedF, theme.animation.transition);
  const appPhase = useAppPhase();

  const isLeaf = !route?.routes;

  let elementF = route?.element ?? (
    <Wrapper
      flex
      position={SHAPE_POSITION.RELATIVE}
    />
  );

  children && (elementF = cloneElement(elementF, { children }));

  const defaultState = isMountedF
    ? appPhase == APP_PHASE.CLIENT_SIDE_NAVIGATION
      ? undefined
      : ELEMENT_STATE.ACTIVE
    : undefined;

  switch (route?.transition) {
    case ROUTE_TRANSITION.SLIDE: {
      elementF = (
        <Slide
          // defaultState={defaultState}
          elementState={isMountedF ? ELEMENT_STATE.ACTIVE : ELEMENT_STATE.EXIT}
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
            // defaultState={defaultState}
            isAbsoluteFill
            isActive={isMountedF}
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

  const hashRoutes = route?.routes?.filter((v) => v.pathname.startsWith('#'));
  if (route && hashRoutes?.length) {
    const { hash } = location.params ?? {};
    elementF = (
      <>
        {elementF}

        {hashRoutes.map((v) => (
          <Modal
            isFullSize
            isOpen={isMountedF && isActive({ from: `#${hash}`, pathname: v.pathname })}
            key={v.pathname}
            onToggle={(v) => {
              if (!v) {
                const { params } = location;
                delete params?.['hash'];
                push({ params, pathname: location.pathname });
              }
            }}
            title={route.title}>
            <Wrapper
              flex
              p
              position={SHAPE_POSITION.RELATIVE}>
              <Route route={v}>
                {v.routes?.map((vv) => (
                  <Route
                    isAbsoluteFill
                    isMounted={isActive({ from: `#${hash}`, pathname: vv.fullpath })}
                    key={vv.pathname}
                    route={vv}
                  />
                ))}
              </Route>
            </Wrapper>
          </Modal>
        ))}
      </>
    );
  }

  route?.isProtectable && (elementF = <Protectable>{elementF}</Protectable>);

  return (
    (isMountedF || isMountedDelayed) && (
      <Wrapper
        {...wrapperProps}
        flex
        isTransparent>
        {route?.header && <RouteHeader route={route} />}

        <Wrapper
          flex
          isVerticalScrollable
          position={SHAPE_POSITION.RELATIVE}>
          {elementF}
        </Wrapper>
      </Wrapper>
    )
  );
};
