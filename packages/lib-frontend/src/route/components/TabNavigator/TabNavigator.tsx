import { Tabs } from '#lib-frontend/core/components/Tabs/Tabs';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { type TabNavigatorPropsModel } from '#lib-frontend/route/components/TabNavigator/TabNavigator.models';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { filterNil } from '#lib-shared/core/utils/filterNil/filterNil';

export const TabNavigator: LFCModel<TabNavigatorPropsModel> = ({ routes, type, ...props }) => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  const { getPath, isActive, location, push } = useRouter();

  const isActiveF = routes?.find(({ fullpath, pathname }) =>
    isActive({ pathname: fullpath ?? pathname }),
  );

  // useEffect(() => {
  //   if (!isActiveF && routes) {
  //     const pathnameF = getPath(routes[0].fullpath ?? routes[0].pathname, location.params);
  //     void push({ pathname: pathnameF });
  //   }
  // }, [isActiveF]);

  return (
    <Tabs
      {...wrapperProps}
      mBottom
      onChange={(pathname) => {
        const pathnameF = getPath(pathname, location.params);
        void push({ pathname: pathnameF });
      }}
      tabs={filterNil(
        routes?.map(
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
  );
};
