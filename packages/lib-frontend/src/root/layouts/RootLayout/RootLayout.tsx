import { PortalHost } from '@lib/frontend/core/components/PortalHost/PortalHost';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { Notifications } from '@lib/frontend/notification/containers/Notifications/Notifications';
import { KeyboardContainer } from '@lib/frontend/core/components/KeyboardContainer/KeyboardContainer';
import type { RootLayoutPropsModel } from '@lib/frontend/root/layouts/RootLayout/RootLayout.models';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const RootLayout: SFCModel<RootLayoutPropsModel> = ({ children, testID, ...props }) => {
  const { styles } = useStyles({ props });
  return (
    <PortalHost>
      <KeyboardContainer
        style={styles}
        testID={testID}>
        <Wrapper
          grow
          position={SHAPE_POSITION.RELATIVE}
          testID={testID}>
          {children}

          <Notifications />
        </Wrapper>
      </KeyboardContainer>
    </PortalHost>
  );
};
