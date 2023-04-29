import type { SFCModel } from '@lib/frontend/core/core.models';
import { MainLayout } from '@lib/frontend/core/layouts/MainLayout/MainLayout';
import { FORM } from '@lib/frontend/form/form.constants';
import { RouteGroup } from '@lib/frontend/route/components/RouteGroup/RouteGroup';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { PERSONAL_GROUPS } from '@lib/frontend/user/pages/PersonalPage/PersonalPage.constants';
import type { PersonalPagePropsModel } from '@lib/frontend/user/pages/PersonalPage/PersonalPage.models';
import { PERSONAL } from '@lib/frontend/user/user.constants';
import { ACCOUNT } from '@lib/shared/user/user.constants';

export const PersonalPage: SFCModel<PersonalPagePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  return (
    <MainLayout
      isHorizontalCenter
      style={styles}
      testID={testID}>
      <RouteGroup
        groups={PERSONAL_GROUPS}
        root={`${FORM}/${ACCOUNT}/${PERSONAL}`}
      />
    </MainLayout>
  );
};
