import type { AdminHomePropsModel } from '@lib/frontend/admin/containers/AdminHome/AdminHome.models';
import { Logo } from '@lib/frontend/app/components/Logo/Logo';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';

export const AdminHome: SFCModel<AdminHomePropsModel> = ({ testID, ...props }) => {
  const { styles } = useStyles({ props });
  return (
    <Wrapper
      p
      style={styles}
      testID={testID}>
      <Logo size="m" />
    </Wrapper>
  );
};
