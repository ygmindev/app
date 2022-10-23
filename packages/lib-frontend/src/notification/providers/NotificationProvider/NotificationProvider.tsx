import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { Notifications } from '@lib/frontend/notification/containers/Notifications/Notifications';
import type { NotificationProviderPropsModel } from '@lib/frontend/notification/providers/NotificationProvider/NotificationProvider.models';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { SHAPE_POSITION } from '@lib/frontend/styling/utils/styler/shapeStyler/shapeStyler.constants';

export const NotificationProvider: SFCModel<NotificationProviderPropsModel> = ({
  children,
  testID,
  ...props
}) => {
  const { styles } = useStyles({ props });
  return (
    <Wrapper
      grow
      position={SHAPE_POSITION.RELATIVE}
      style={styles}
      testID={testID}>
      {children}

      <Notifications />
    </Wrapper>
  );
};
