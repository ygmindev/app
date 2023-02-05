import { ANIMATION_STATES_APPEAR } from '@lib/frontend/animation/animation.constants';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { NOTIFICATION_WIDTH } from '@lib/frontend/notification/components/Notification/Notification.constants';
import type { NotificationPropsModel } from '@lib/frontend/notification/components/Notification/Notification.models';
import { useNotification } from '@lib/frontend/notification/hooks/useNotification/useNotification';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import {
  THEME_BASIC_SIZE,
  THEME_COLOR,
  THEME_ROLE,
  THEME_SIZE,
} from '@lib/frontend/style/style.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const Notification: SFCModel<NotificationPropsModel> = ({
  color = THEME_COLOR.PRIMARY,
  icon,
  id,
  isInfinite,
  testID,
  message,
  title,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const { t } = useTranslation();
  const { remove } = useNotification();

  return (
    <Wrapper
      animation={{ states: ANIMATION_STATES_APPEAR }}
      backgroundColor={color}
      isOverflowHidden
      isShadow
      mTop={THEME_BASIC_SIZE.SMALL}
      position={SHAPE_POSITION.RELATIVE}
      round
      style={styles}
      testID={testID}
      width={NOTIFICATION_WIDTH}>
      {isInfinite ? null : (
        <Wrapper
          backgroundColor={color}
          backgroundRole={THEME_ROLE.MUTED}
          height={5}
          position={SHAPE_POSITION.ABSOLUTE}
          right={0}
          top={0}
          zIndex={1}
        />
      )}

      <Wrapper
        grow
        isRowAlign
        p>
        <Icon
          color={color}
          colorRole={THEME_ROLE.MAIN_CONTRAST}
          fontSize={THEME_SIZE.LARGE}
          icon={icon}
        />

        <Wrapper
          basis={0}
          grow
          isWrap
          spacing={THEME_SIZE.SMALL}>
          {title && (
            <Text
              color={color}
              colorRole={THEME_ROLE.MAIN_CONTRAST}
              isBold>
              {t(title)}
            </Text>
          )}

          {message && (
            <Text
              color={color}
              colorRole={THEME_ROLE.MAIN_CONTRAST}>
              {t(message)}
            </Text>
          )}
        </Wrapper>

        <Button
          color={color}
          icon="times"
          onPress={() => remove(id)}
        />
      </Wrapper>
    </Wrapper>
  );
};
