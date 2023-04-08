import type { SFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { SettingsGroupAppearance } from '@lib/frontend/settings/containers/SettingsGroupAppearance/SettingsGroupAppearance';
import type { SettingsPagePropsModel } from '@lib/frontend/settings/pages/SettingsPage/SettingsPage.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';

export const SettingsPage: SFCModel<SettingsPagePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  return (
    <MainLayout
      isHorizontalCenter
      style={styles}
      testID={testID}>
      <SettingsGroupAppearance />
    </MainLayout>
  );
};
