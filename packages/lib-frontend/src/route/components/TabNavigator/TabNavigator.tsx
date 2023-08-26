import { useEffect } from 'react';

import { Tabs } from '#lib-frontend/core/components/Tabs/Tabs';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { type TabNavigatorPropsModel } from '#lib-frontend/route/components/TabNavigator/TabNavigator.models';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { filterNil } from '#lib-shared/core/utils/filterNil/filterNil';

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

  useEffect(() => {
    !isActiveF && routes && void push({ pathname: routes[0].fullpath ?? routes[0].pathname });
  }, [isActiveF]);

  return (
    <Tabs
      onChange={(pathname) => {
        void push({ pathname });
      }}
      style={styles}
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
      testID={testID}
      type={type}
      value={isActiveF?.fullpath}
    />
  );
};
