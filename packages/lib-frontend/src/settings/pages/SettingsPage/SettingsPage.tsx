import { type SFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { RouteGroup } from '#lib-frontend/route/components/RouteGroup/RouteGroup';
import { SETTINGS_GROUPS } from '#lib-frontend/settings/pages/SettingsPage/SettingsPage.constants';
import { type SettingsPagePropsModel } from '#lib-frontend/settings/pages/SettingsPage/SettingsPage.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';

export const SettingsPage: SFCModel<SettingsPagePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  return (
    <MainLayout
      style={styles}
      testID={testID}>
      {SETTINGS_GROUPS.map(({ id, label, routes }) => (
        <RouteGroup
          key={id}
          label={label}
          root
          routes={routes}
        />
      ))}
    </MainLayout>
  );
};
