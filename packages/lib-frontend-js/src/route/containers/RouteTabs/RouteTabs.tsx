import { Tabs } from '@lib/frontend/core/components/Tabs/Tabs';
import { TABS_TYPE } from '@lib/frontend/core/components/Tabs/Tabs.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { type RouteTabsPropsModel } from '@lib/frontend/route/containers/RouteTabs/RouteTabs.models';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useMemo } from 'react';

export const RouteTabs: LFCModel<RouteTabsPropsModel> = ({
  routes,
  type = TABS_TYPE.CONTAINED,
  ...props
}) => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  const { isActive, push } = useRouter();

  const value = useMemo(() => {
    const route = routes.find(({ fullpath, pathname }) =>
      isActive({ pathname: fullpath ?? pathname }),
    );
    return route?.fullpath ?? route?.pathname;
  }, [routes, isActive]);

  return (
    <Tabs
      {...wrapperProps}
      tabs={routes.map(({ category, fullpath, icon, pathname, title }) => {
        const pathnameF = fullpath ?? pathname;
        return {
          category,
          icon,
          id: pathnameF,
          label: title ? t(title) : pathname.replace('/', ''),
          onPress: () => push({ pathname: pathnameF }),
        };
      })}
      type={type}
      value={value}
    />
  );
};
