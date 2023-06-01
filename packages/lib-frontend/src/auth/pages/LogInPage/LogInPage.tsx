import { LogInForm } from '@lib/frontend/auth/containers/LogInForm/LogInForm';
import type { RegisterPagePropsModel } from '@lib/frontend/auth/pages/RegisterPage/RegisterPage.models';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { CenterLayout } from '@lib/frontend/core/layouts/CenterLayout/CenterLayout';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';

export const LogInPage: SFCModel<RegisterPagePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  return (
    <CenterLayout
      style={styles}
      testID={testID}>
      <LogInForm />
    </CenterLayout>
  );
};
