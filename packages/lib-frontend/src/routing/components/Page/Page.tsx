import { useIsInitialized } from '@lib/frontend/app/hooks/useIsInitialized/useIsInitialized';
import { SIGN_IN } from '@lib/frontend/auth/auth.constants';
import { useIsAuthenticated } from '@lib/frontend/auth/hooks/useIsAuthenticated/useIsAuthenticated';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { NAVIGATION_TYPE } from '@lib/frontend/routing/components/Page/Page.constants';
import type { PageModel } from '@lib/frontend/routing/components/Page/Page.models';
import { Redirect } from '@lib/frontend/routing/components/Redirect/Redirect';
import { RouteHeader } from '@lib/frontend/routing/components/RouteHeader/RouteHeader';
import { RouteTabs } from '@lib/frontend/routing/containers/RouteTabs/RouteTabs';
import { useRouter } from '@lib/frontend/routing/hooks/useRouter/useRouter';
import { trimPathname } from '@lib/frontend/routing/utils/trimPathname/trimPathname';

export const Page: SFCModel<PageModel> = ({
  children,
  element,
  icon,
  isProtected,
  isTrackingEnabled = true,
  navigation,
  pathname,
  paths,
  routes,
  title,
}) => {
  const isAuthenticated = useIsAuthenticated();
  const isInitialized = useIsInitialized();
  const { isActive, location } = useRouter();

  if (isProtected && isInitialized && !isAuthenticated) {
    return (
      <Redirect
        params={{}}
        pathname={SIGN_IN}
      />
    );
  }

  const _isActive = isActive(pathname);
  // usePageAnalytics({
  //   paths,
  //   isDisabled: !_isActive || !isEmpty(props.routes) || isAnalyticsDisabled,
  // });

  let _element = (
    <>
      {element}

      {children}
    </>
  );

  if (routes) {
    const tabs = routes.filter((route) => route.navigation === NAVIGATION_TYPE.TAB);
    if (tabs && tabs.length) {
      _element = (
        <Wrapper
          grow
          spacing>
          <RouteTabs
            tabs={tabs.map((route) => ({
              icon: route.icon,
              id: trimPathname(`${location.pathname}/${route.pathname}`),
              label: route.title,
            }))}
          />

          {_element}
        </Wrapper>
      );
    }
  }

  switch (navigation) {
    case NAVIGATION_TYPE.PATH: {
      return (
        <Wrapper
          grow
          spacing>
          <RouteHeader
            icon={icon}
            paths={paths}
            title={title}
          />

          {_element}
        </Wrapper>
      );
      break;
    }
    default:
      return _element;
  }
};
