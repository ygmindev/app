import { useIsInitialized } from '@lib/frontend/app/hooks/useIsInitialized/useIsInitialized';
import type { AppProviderPropsModel } from '@lib/frontend/app/providers/AppProvider/AppProvider.models';
import { Loading } from '@lib/frontend/core/components/Loading/Loading';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { FCModel } from '@lib/frontend/core/core.models';
import { DevTools } from '@lib/frontend/dev/containers/DevTools/DevTools';
import { THEME_SIZE } from '@lib/frontend/style/utils/theme/theme.constants';

export const AppProvider: FCModel<AppProviderPropsModel> = ({ children, testID }) => {
  const isInitialized = useIsInitialized();

  return (
    <Wrapper grow testID={testID}>
      {isInitialized ? (
        children
      ) : (
        <Wrapper grow isCenter>
          <Loading size={THEME_SIZE.XLARGE} />
        </Wrapper>
      )}

      {process.env.NODE_ENV === 'development' && <DevTools />}
    </Wrapper>
  );
};
