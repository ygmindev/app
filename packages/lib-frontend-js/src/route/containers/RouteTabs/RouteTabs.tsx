import { Tabs } from '@lib/frontend/core/components/Tabs/Tabs';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { type RouteTabsPropsModel } from '@lib/frontend/route/containers/RouteTabs/RouteTabs.models';
import { useRouter } from '@lib/frontend/route/hooks/useRouter/useRouter';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useMemo } from 'react';

export const RouteTabs: LFCModel<RouteTabsPropsModel> = ({ routes, ...props }) => {
  const { t } = useTranslation();
  const { wrapperProps } = useLayoutStyles({ props });
  const { isActive, push } = useRouter();

  const value = useMemo(() => {
    const route = routes.find(({ pathname }) => isActive({ pathname }));
    return route?.fullpath ?? route?.pathname;
  }, [routes, isActive]);

  return (
    <Tabs
      {...wrapperProps}
      tabs={routes.map(({ fullpath, icon, pathname, title }) => {
        const pathnameF = fullpath ?? pathname;
        return {
          icon,
          id: pathname,
          label: t(title),
          onPress: () => push({ pathname: pathnameF }),
        };
      })}
      value={value}
    />
  );
};
