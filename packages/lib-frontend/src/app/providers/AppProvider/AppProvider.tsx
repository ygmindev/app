import { useIsInitialized } from '@lib/frontend/app/hooks/useIsInitialized/useIsInitialized';
import type { AppProviderPropsModel } from '@lib/frontend/app/providers/AppProvider/AppProvider.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';

export const AppProvider: SFCModel<AppProviderPropsModel> = ({ children, testID, ...props }) => {
  const { styles } = useStyles({ props });
  const isInitialized = useIsInitialized();

  return (
    <Wrapper
      grow
      style={styles}
      testID={testID}>
      {isInitialized && children}
    </Wrapper>
  );
};
