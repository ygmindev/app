import { Slide } from '@lib/frontend/animation/components/Slide/Slide';
import { Protectable } from '@lib/frontend/auth/components/Protectable/Protectable';
import { Portal } from '@lib/frontend/core/components/Portal/Portal';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useDimension } from '@lib/frontend/platform/hooks/useDimension/useDimension';
import type { RoutePropsModel } from '@lib/frontend/route/components/Route/Route.models';
import { RouteHeader } from '@lib/frontend/route/containers/RouteHeader/RouteHeader';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { trimPathname } from '@lib/frontend/route/utils/trimPathname/trimPathname';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { cloneElement, Fragment, useMemo } from 'react';

export const Route: SFCModel<RoutePropsModel> = ({ children, route, testID, ...props }) => {
  useTranslation(route.ns);
  const { styles } = useStyles({ props });
  const { isActive } = useRouter();
  const dimension = useDimension();
  const isBack = useStore((state) => state.route.isBack);

  const _isLeaf = !route.routes;
  const _Container = route.isProtectable ? Protectable : Fragment;
  const _element = cloneElement(route.element || <Wrapper grow />, { children });
  const _pathname = useMemo(() => trimPathname(`${route.root || ''}/${route.pathname}`), [route]);
  const _isActive = useMemo(() => isActive({ isExact: true, pathname: _pathname }), [_pathname]);

  return (
    <>
      {route.header && _isLeaf && _isActive && (
        <Portal>
          <RouteHeader route={route} />
        </Portal>
      )}

      <Slide
        isBack={isBack}
        measure={dimension}
        style={styles}
        testID={testID}>
        <_Container>{_element}</_Container>
      </Slide>
    </>
  );
};
