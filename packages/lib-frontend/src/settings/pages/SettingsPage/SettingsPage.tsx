import { type SFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { FORM } from '#lib-frontend/form/form.constants';
import { RouteGroup } from '#lib-frontend/route/components/RouteGroup/RouteGroup';
import { SETTINGS_GROUPS } from '#lib-frontend/settings/pages/SettingsPage/SettingsPage.constants';
import { type SettingsPagePropsModel } from '#lib-frontend/settings/pages/SettingsPage/SettingsPage.models';
import { SETTINGS } from '#lib-frontend/settings/settings.constants';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { ACCOUNT } from '#lib-shared/user/user.constants';

export const SettingsPage: SFCModel<SettingsPagePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  return (
    <MainLayout
      isHorizontalCenter
      style={styles}
      testID={testID}>
      <RouteGroup
        groups={SETTINGS_GROUPS}
        root={`${FORM}/${ACCOUNT}/${SETTINGS}`}
      />
    </MainLayout>
  );
};
