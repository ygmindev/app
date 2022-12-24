import { useIsInitialized } from '@lib/frontend/app/hooks/useIsInitialized/useIsInitialized';
import type { AppProviderPropsModel } from '@lib/frontend/app/providers/AppProvider/AppProvider.models';
import { ErrorBoundary } from '@lib/frontend/core/components/ErrorBoundary/ErrorBoundary';
import { Loading } from '@lib/frontend/core/components/Loading/Loading';
import { PortalHost } from '@lib/frontend/core/components/PortalHost/PortalHost';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { FCModel } from '@lib/frontend/core/core.models';
import { DevTools } from '@lib/frontend/dev/containers/DevTools/DevTools';
import { Notifications } from '@lib/frontend/notification/containers/Notifications/Notifications';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { THEME_SIZE } from '@lib/frontend/style/utils/theme/theme.constants';

export const AppProvider: FCModel<AppProviderPropsModel> = ({ children, testID }) => {
  const isInitialized = useIsInitialized();

  return (
    <PortalHost>
      <Wrapper
        grow
        position={SHAPE_POSITION.RELATIVE}
        testID={testID}>
        <ErrorBoundary>
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
        </ErrorBoundary>

        <Notifications />
      </Wrapper>
    </PortalHost>
  );
};
