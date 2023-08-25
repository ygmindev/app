import { Tabs } from '#lib-frontend/core/components/Tabs/Tabs';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { type TabNavigatorPropsModel } from '#lib-frontend/route/components/TabNavigator/TabNavigator.models';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { type RouteModel } from '#lib-frontend/route/route.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';

export const TabNavigator: SFCModel<TabNavigatorPropsModel> = ({
  routes,
  testID,
  type,
  ...props
}) => {
  const { t } = useTranslation();
  const { styles } = useStyles({ props });
  const { isActive, push } = useRouter();

  const isActiveF = routes?.find(({ fullpath, pathname }) =>
    isActive({ pathname: fullpath ?? pathname }),
  );

  const getIndexRoute = (value?: string, childRoutes?: Array<RouteModel>): string | undefined => {
    if (value) {
      const route = childRoutes?.find(({ fullpath }) => fullpath === value);
      return route?.isLeaf
        ? route?.fullpath
        : route?.routes
        ? getIndexRoute(route.routes[0].fullpath, route.routes)
        : undefined;
    }
    return undefined;
  };

  return (
    <Tabs
      onChange={(value) => {
        const pathname = getIndexRoute(value, routes);
        pathname && void push({ pathname });
      }}
      style={styles}
      tabs={routes?.map(({ fullpath, icon, pathname, title }) => ({
        icon,
        id: fullpath ?? pathname,
        label: title ? t(title) : pathname,
      }))}
      testID={testID}
      type={type}
      value={isActiveF?.fullpath}
    />
  );
};
