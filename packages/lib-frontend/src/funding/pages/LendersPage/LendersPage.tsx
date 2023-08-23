import { Text } from '#lib-frontend/core/components/Text/Text';
import { type SFCModel } from '#lib-frontend/core/core.models';
import { MainLayout } from '#lib-frontend/core/layouts/MainLayout/MainLayout';
import { type LendersPagePropsModel } from '#lib-frontend/funding/pages/LendersPage/LendersPage.models';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';

export const LendersPage: SFCModel<LendersPagePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  return (
    <MainLayout
      p
      style={styles}
      testID={testID}>
      <Text>LendersPage</Text>
    </MainLayout>
  );
};
