import { ANIMATION_STATES_APPEARABLE } from '@lib/frontend/animation/animation.constants';
import { Protectable } from '@lib/frontend/auth/components/Protectable/Protectable';
import { Portal } from '@lib/frontend/core/components/Portal/Portal';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import type { RoutePropsModel } from '@lib/frontend/route/components/Route/Route.models';
import { RouteHeader } from '@lib/frontend/route/containers/RouteHeader/RouteHeader';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { cloneElement, Fragment, useMemo } from 'react';

export const Route: SFCModel<RoutePropsModel> = ({ children, route, ...props }) => {
  useTranslation(route.ns);
  const { styles } = useStyles({ props });
  const theme = useTheme();
  const { isActive } = useRouter();
  const _isLeaf = !route.routes;

  const _Container = route.isProtectable ? Protectable : Fragment;
  const _element = cloneElement(route.element || <Wrapper grow />, { children });
  const _isActive = useMemo(
    () => isActive({ isExact: true, pathname: `${route.root || ''}/${route.pathname}` }),
    [isActive, route],
  );

  return (
    <>
      {_isLeaf && route.header && _isActive && (
        <Portal>
          <RouteHeader route={route} />
        </Portal>
      )}

      <Wrapper
        animation={{ duration: theme.animation.transition, states: ANIMATION_STATES_APPEARABLE }}
        elementState={ELEMENT_STATE.ACTIVE}
        grow
        isAbsoluteFill
        style={styles}>
        <_Container>{_element}</_Container>
      </Wrapper>
    </>
  );
};
