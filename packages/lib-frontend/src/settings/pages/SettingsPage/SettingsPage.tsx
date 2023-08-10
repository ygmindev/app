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
      isHorizontalCenter
      style={styles}
      testID={testID}>
      {SETTINGS_GROUPS.map(({ id, root, routes }) => (
        <RouteGroup
          key={id}
          root={root}
          routes={routes}
        />
      ))}
    </MainLayout>
  );
};
