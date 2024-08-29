import { Tabs } from '@lib/frontend/core/components/Tabs/Tabs';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { type TabLayoutPropsModel } from '@lib/frontend/route/components/TabLayout/TabLayout.models';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { type RouteModel } from '@lib/frontend/route/route.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import find from 'lodash/find';
import { useEffect } from 'react';

export const TabLayout: LFCModel<TabLayoutPropsModel> = ({ children, route, type, ...props }) => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  const { getPath, isActive, location, push } = useRouter();

  const isActiveF = route?.routes?.find(
    ({ fullpath, isNavigatable = true, pathname }) =>
      isNavigatable && isActive({ isExact: true, pathname: fullpath ?? pathname }),
  );

  useEffect(() => {
    const isMountedF = isActive({ isExact: true, pathname: route?.fullpath });
    if (isMountedF && !isActiveF && route?.routes) {
      const child = find<RouteModel>(route.routes, ({ isNavigatable = true }) => isNavigatable);
      if (child) {
        const pathname = getPath(child.fullpath ?? child.pathname, location.params);
        push({ pathname });
      }
    }
  }, [isActiveF]);

  return (
    <Wrapper
      {...wrapperProps}
      flex
      p>
      <Tabs
        onChange={(pathname) => {
          const pathnameF = getPath(pathname, location.params);
          void push({ pathname: pathnameF });
        }}
        tabs={filterNil(
          route?.routes?.map(
            ({ fullpath, icon, isNavigatable = true, pathname, title }) =>
              isNavigatable && {
                icon,
                id: fullpath ?? pathname,
                label: title ? t(title) : pathname,
              },
          ),
        )}
        type={type}
        value={isActiveF?.fullpath}
      />

      {children}
    </Wrapper>
  );
};
