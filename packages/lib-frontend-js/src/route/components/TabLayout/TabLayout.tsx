import { Tabs } from '@lib/frontend/core/components/Tabs/Tabs';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { type TabLayoutPropsModel } from '@lib/frontend/route/components/TabLayout/TabLayout.models';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
// import { type RouteModel } from '@lib/frontend/route/route.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
// import find from 'lodash/find';
import { useEffect } from 'react';

export const TabLayout: LFCModel<TabLayoutPropsModel> = ({ children, route, type, ...props }) => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  const { getPath, isActive, location, push } = useRouter();

  const activeChild = route?.routes?.find(
    ({ fullpath, isNavigatable = true, pathname }) =>
      isNavigatable && isActive({ isExact: false, pathname: fullpath ?? pathname }),
  );

  useEffect(() => {
    // const isMountedF = isActive({ isExact: true, pathname: route?.fullpath });
    // if (isMountedF && !activeChild && route?.routes) {
    //   const child = find<RouteModel>(route.routes, ({ isNavigatable = true }) => isNavigatable);
    //   if (child) {
    //     const pathname = getPath(child.fullpath ?? child.pathname, location.params);
    //     push({ pathname });
    //   }
    // }
  }, [activeChild]);

  return (
    <MainLayout
      {...wrapperProps}
      flex
      isFullHeight>
      <Tabs
        onChange={(pathname) => {
          // const pathnameF = getPath(pathname, location.params);
          void push({ pathname });
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
        value={activeChild?.fullpath}
      />

      <Wrapper
        flex
        position={SHAPE_POSITION.RELATIVE}>
        {children}
      </Wrapper>
    </MainLayout>
  );
};
