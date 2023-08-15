import { Tabs } from '#lib-frontend/core/components/Tabs/Tabs';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { useControlledValue } from '#lib-frontend/form/hooks/useControlledValue/useControlledValue';
import { type RouteTabsPropsModel } from '#lib-frontend/route/components/RouteTabs/RouteTabs.models';
import { useRouter } from '#lib-frontend/route/hooks/useRouter/useRouter';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';

export const RouteTabs: SFCModel<RouteTabsPropsModel> = ({ routes, testID, value, ...props }) => {
  const { styles } = useStyles({ props });
  const { isActive, push } = useRouter();
  const isActiveF = routes?.find(({ pathname }) => isActive({ pathname }));
  const { valueControlled, valueControlledSet } = useControlledValue({
    defaultValue: isActiveF?.pathname,
    value,
  });

  return (
    <Tabs
      onChange={(tab) => {
        valueControlledSet(tab);
        void push({ pathname: tab });
      }}
      style={styles}
      tabs={routes?.map(({ icon, label, pathname }) => ({ icon, id: pathname, label }))}
      testID={testID}
      value={valueControlled}
    />
  );
};
