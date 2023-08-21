import { Tabs } from '#lib-frontend/core/components/Tabs/Tabs';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { type TabNavigatorPropsModel } from '#lib-frontend/route/components/TabNavigator/TabNavigator.models';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';

export const TabNavigator: SFCModel<TabNavigatorPropsModel> = ({ routes, testID, ...props }) => {
  const { t } = useTranslation();
  const { styles } = useStyles({ props });
  const { isActive, push } = useRouter();
  const isActiveF = routes?.find(({ fullpath, pathname }) =>
    isActive({ pathname: fullpath ?? pathname }),
  );
  const value = isActiveF?.pathname;
  return (
    <Tabs
      onChange={(tab) => {
        void push({ pathname: tab });
      }}
      style={styles}
      tabs={routes?.map(({ icon, pathname, title }) => ({
        icon,
        id: pathname,
        label: title ? t(title) : pathname,
      }))}
      testID={testID}
      value={value}
    />
  );
};
