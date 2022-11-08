import { Slide } from '@lib/frontend/animation/components/Slide/Slide';
import { useIsInitialized } from '@lib/frontend/app/hooks/useIsInitialized/useIsInitialized';
import { SIGN_IN } from '@lib/frontend/auth/auth.constants';
import { useIsAuthenticated } from '@lib/frontend/auth/hooks/useIsAuthenticated/useIsAuthenticated';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useSelector } from '@lib/frontend/root/hooks/useSelector/useSelector';
import type { PagePropsModel } from '@lib/frontend/routing/components/Page/Page.models';
import { Redirect } from '@lib/frontend/routing/components/Redirect/Redirect';
import { useRouter } from '@lib/frontend/routing/hooks/useRouter/useRouter';
import { SHAPE_POSITION } from '@lib/frontend/styling/utils/styler/shapeStyler/shapeStyler.constants';
import { Fragment } from 'react';

export const Page: SFCModel<PagePropsModel> = ({
  element,
  icon,
  isProtected,
  Layout = Fragment,
  pathname = '/',
  title,
  routes,
}) => {
  const isAuthenticated = useIsAuthenticated();
  const isInitialized = useIsInitialized();

  const current = useSelector((state) => state.routing.current);
  const previous = useSelector((state) => state.routing.previous);
  const pathnameCurrent = current?.pathname;
  const pathnamePrev = previous?.pathname;

  const { isActive } = useRouter();

  if (isProtected && isInitialized && !isAuthenticated) {
    return <Redirect pathname={SIGN_IN} />;
  }

  const _routes = routes && (
    <Wrapper
      grow
      position={SHAPE_POSITION.RELATIVE}>
      {routes.map((route) => {
        const _pathname = route.pathname || '/';
        const _isActive = pathnameCurrent
          ? isActive({ from: _pathname, isExact: true, to: pathnameCurrent })
          : false;
        const _isActivePrev = pathnamePrev
          ? isActive({ from: _pathname, isExact: true, to: pathnamePrev })
          : false;

        if (_isActive || _isActivePrev) {
          return (
            <Wrapper
              isAbsoluteFill
              key={_pathname}>
              <Slide isVisible={_isActive}>{route.element}</Slide>
            </Wrapper>
          );
        }

        return null;
      })}
    </Wrapper>
  );

  return (
    <Layout>
      {element}

      {_routes}
    </Layout>
  );
};
