import { useEffect } from 'react';

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
  const { isActive, push } = useRouter();

  const isActiveF = routes?.find(({ fullpath, pathname }) =>
    isActive({ pathname: fullpath ?? pathname }),
  );

  useEffect(() => {
    !isActiveF && routes && void push({ pathname: routes[0].fullpath ?? routes[0].pathname });
  }, [isActiveF]);

  return (
    <Tabs
      {...wrapperProps}
      onChange={(pathname) => {
        void push({ pathname });
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
