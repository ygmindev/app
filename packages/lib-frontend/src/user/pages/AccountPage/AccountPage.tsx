import { type SFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { RouteGroup } from '#lib-frontend/route/components/RouteGroup/RouteGroup';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { ACCOUNT_GROUPS } from '#lib-frontend/user/pages/AccountPage/AccountPage.constants';
import { type AccountPagePropsModel } from '#lib-frontend/user/pages/AccountPage/AccountPage.models';
import { ACCOUNT } from '#lib-shared/user/user.constants';

export const AccountPage: SFCModel<AccountPagePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  return (
    <MainLayout
      isHorizontalCenter
      style={styles}
      testID={testID}>
      <RouteGroup
        groups={ACCOUNT_GROUPS}
        root={ACCOUNT}
      />
    </MainLayout>
  );
};
