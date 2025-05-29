import { AppHeader } from '@lib/frontend/app/containers/AppHeader/AppHeader';
import { type AppLayoutPropsModel } from '@lib/frontend/app/layouts/AppLayout/AppLayout.models';
import { KeyboardContainer } from '@lib/frontend/core/components/KeyboardContainer/KeyboardContainer';
import { PortalHost } from '@lib/frontend/core/components/PortalHost/PortalHost';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { Notifications } from '@lib/frontend/notification/containers/Notifications/Notifications';
import { useStore } from '@lib/frontend/state/hooks/useStore/useStore';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR_MORE } from '@lib/frontend/style/style.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const AppLayout: LFCModel<AppLayoutPropsModel> = ({ children, ...props }) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const [notifications] = useStore('notification.notifications');
  return (
    <KeyboardContainer>
      <Wrapper
        {...wrapperProps}
        backgroundColor={THEME_COLOR_MORE.SURFACE}
        flex>
        <PortalHost>
          <Wrapper
            flex
            position={SHAPE_POSITION.RELATIVE}>
            <AppHeader />

            <Wrapper grow>
              {children}

              {notifications && notifications.length > 0 && <Notifications />}
            </Wrapper>
          </Wrapper>
        </PortalHost>
      </Wrapper>
    </KeyboardContainer>
  );
};
