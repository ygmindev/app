import { AppFooter } from '@lib/frontend/app/containers/AppFooter/AppFooter';
import { AppHeader } from '@lib/frontend/app/containers/AppHeader/AppHeader';
import type { AppLayoutPropsModel } from '@lib/frontend/app/layouts/AppLayout/AppLayout.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';

export const AppLayout: SFCModel<AppLayoutPropsModel> = ({ children, testID, ...props }) => {
  const { styles } = useStyles({ props });
  return (
    <Wrapper
      grow
      style={styles}
      testID={testID}>
      <AppHeader />

      <Wrapper
        grow
        p>
        {children}
      </Wrapper>

      <AppFooter />
    </Wrapper>
  );
};
