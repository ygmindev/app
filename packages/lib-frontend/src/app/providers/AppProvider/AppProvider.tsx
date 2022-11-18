import { useIsInitialized } from '@lib/frontend/app/hooks/useIsInitialized/useIsInitialized';
import type { AppProviderPropsModel } from '@lib/frontend/app/providers/AppProvider/AppProvider.models';
import { Loading } from '@lib/frontend/core/components/Loading/Loading';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { DevTools } from '@lib/frontend/dev/containers/DevTools/DevTools';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { THEME_SIZE } from '@lib/frontend/styling/utils/theme/theme.constants';

export const AppProvider: SFCModel<AppProviderPropsModel> = ({ children, testID, ...props }) => {
  const { styles } = useStyles({ props });
  const isInitialized = useIsInitialized();

  return (
    <Wrapper
      grow
      style={styles}
      testID={testID}>
      {isInitialized ? (
        children
      ) : (
        <Wrapper
          grow
          isCenter>
          <Loading size={THEME_SIZE.XLARGE} />
        </Wrapper>
      )}

      {process.env.NODE_ENV === 'development' && <DevTools />}
    </Wrapper>
  );
};
