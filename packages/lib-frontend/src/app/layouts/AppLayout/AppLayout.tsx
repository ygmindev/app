import { AppHeader } from '#lib-frontend/app/containers/AppHeader/AppHeader';
import type { AppLayoutPropsModel } from '#lib-frontend/app/layouts/AppLayout/AppLayout.models';
import { KeyboardContainer } from '#lib-frontend/core/components/KeyboardContainer/KeyboardContainer';
import { PortalHost } from '#lib-frontend/core/components/PortalHost/PortalHost';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '#lib-frontend/core/core.models';
import { Notifications } from '#lib-frontend/notification/containers/Notifications/Notifications';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { THEME_COLOR } from '#lib-frontend/style/style.constants';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const AppLayout: SFCModel<AppLayoutPropsModel> = ({ children, testID, ...props }) => {
  const { styles } = useStyles({ props });
  return (
    <PortalHost>
      <KeyboardContainer
        style={styles}
        testID={testID}>
        <Wrapper
          grow
          position={SHAPE_POSITION.RELATIVE}>
          <Wrapper
            backgroundColor={THEME_COLOR.NEUTRAL}
            grow
            style={styles}>
            <AppHeader />

            {children}
          </Wrapper>

          <Notifications />
        </Wrapper>
      </KeyboardContainer>
    </PortalHost>
  );
};
