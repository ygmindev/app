import { Slide } from '@lib/frontend/animation/components/Slide/Slide';
import { useIsInitialized } from '@lib/frontend/app/hooks/useIsInitialized/useIsInitialized';
import { SIGN_IN } from '@lib/frontend/auth/auth.constants';
import { useIsAuthenticated } from '@lib/frontend/auth/hooks/useIsAuthenticated/useIsAuthenticated';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useSelector } from '@lib/frontend/root/hooks/useSelector/useSelector';
import type { PagePropsModel } from '@lib/frontend/routing/components/Page/Page.models';
import { Redirect } from '@lib/frontend/routing/components/Redirect/Redirect';
import { useCurrentRoute } from '@lib/frontend/routing/hooks/useCurrentRoute/useCurrentRoute';
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
  const previous = useSelector((state) => state.routing.previous);
  console.warn(previous);

  const { isActive } = useRouter();
  const current = useCurrentRoute();

  if (isProtected && isInitialized && !isAuthenticated) {
    return <Redirect pathname={SIGN_IN} />;
  }

  return (
    <Layout>
      {element}

      {routes && (
        <Wrapper
          grow
          position={SHAPE_POSITION.RELATIVE}>
          {routes.map((route) => {
            const pathnamePrev = previous?.pathname;
            const _isActive = isActive({ from: route.pathname || '/' });
            const _isActivePrev =
              pathnamePrev &&
              isActive({ from: route.pathname || '/', isExact: true, to: pathnamePrev });

            return _isActive || _isActivePrev ? (
              <Wrapper
                isAbsoluteFill
                key={route.pathname || '/'}>
                <Slide isVisible={_isActive}>{current}</Slide>
              </Wrapper>
            ) : null;
          })}
        </Wrapper>
      )}
    </Layout>
  );
};
