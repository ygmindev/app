import { AppHeader } from '@lib/frontend/app/containers/AppHeader/AppHeader';
import type { AppLayoutPropsModel } from '@lib/frontend/app/layouts/AppLayout/AppLayout.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';

export const AppLayout: SFCModel<AppLayoutPropsModel> = ({ children, testID, ...props }) => {
  const { styles } = useStyles({ props });
  return (
    <Wrapper
      backgroundColor={THEME_COLOR.NEUTRAL}
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
          <Loading size={THEME_SIZE_MORE.XLARGE} />
        </Wrapper>
      )} */}

      {children}
    </Wrapper>
  );
};
