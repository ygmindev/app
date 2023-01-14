import { AppHeader } from '@lib/frontend/app/containers/AppHeader/AppHeader';
import { useIsInitialized } from '@lib/frontend/app/hooks/useIsInitialized/useIsInitialized';
import type { AppLayoutPropsModel } from '@lib/frontend/app/layouts/AppLayout/AppLayout.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';

export const AppLayout: SFCModel<AppLayoutPropsModel> = ({ children, testID, ...props }) => {
  const isInitialized = useIsInitialized();
  const { styles } = useStyles({ props });
  return (
    <Wrapper
      grow
      style={styles}
      testID={testID}>
      <AppHeader />

      {/* {isInitialized ? (
        children
      ) : (
        <Wrapper
          grow
          p>
          <Loading size={THEME_SIZE.XLARGE} />
        </Wrapper>
      )} */}

      {children}
    </Wrapper>
  );
};
