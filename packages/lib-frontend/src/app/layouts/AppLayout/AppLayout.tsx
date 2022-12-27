import { AppFooter } from '@lib/frontend/app/containers/AppFooter/AppFooter';
import { AppHeader } from '@lib/frontend/app/containers/AppHeader/AppHeader';
import { useIsInitialized } from '@lib/frontend/app/hooks/useIsInitialized/useIsInitialized';
import type { AppLayoutPropsModel } from '@lib/frontend/app/layouts/AppLayout/AppLayout.models';
import { Loading } from '@lib/frontend/core/components/Loading/Loading';
import { PortalHost } from '@lib/frontend/core/components/PortalHost/PortalHost';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { FCModel } from '@lib/frontend/core/core.models';
import { DevTools } from '@lib/frontend/dev/containers/DevTools/DevTools';
import { Notifications } from '@lib/frontend/notification/containers/Notifications/Notifications';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const AppLayout: FCModel<AppLayoutPropsModel> = ({ children, testID }) => {
  const isInitialized = useIsInitialized();
  return (
    <PortalHost>
      <Wrapper
        grow
        position={SHAPE_POSITION.RELATIVE}
        testID={testID}>
        <AppHeader />

        {isInitialized ? (
          children
        ) : (
          <Wrapper
            grow
            p>
            <Loading size={THEME_SIZE.XLARGE} />
          </Wrapper>
        )}

        <AppFooter />

        <Notifications />

        {process.env.NODE_ENV === 'development' && <DevTools />}
      </Wrapper>
    </PortalHost>
  );
};
