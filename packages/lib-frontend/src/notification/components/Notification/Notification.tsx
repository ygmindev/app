import { Appear } from '@lib/frontend/animation/components/Appear/Appear';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import { useIsMounted } from '@lib/frontend/core/hooks/useIsMounted/useIsMounted';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import {
  NOTIFICATION_DURATION,
  NOTIFICATION_WIDTH,
} from '@lib/frontend/notification/components/Notification/Notification.constants';
import type { NotificationPropsModel } from '@lib/frontend/notification/components/Notification/Notification.models';
import { notificationActions } from '@lib/frontend/notification/stores/reducer/reducer';
import { dispatch } from '@lib/frontend/root/stores/store/store';
import { useStyles } from '@lib/frontend/styling/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/styling/hooks/useTheme/useTheme';
import { SHAPE_POSITION } from '@lib/frontend/styling/utils/styler/shapeStyler/shapeStyler.constants';
import {
  THEME_COLOR,
  THEME_RELATIVE_COLOR,
  THEME_SHADE,
  THEME_SIZE,
} from '@lib/frontend/styling/utils/theme/theme.constants';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { useCallback, useState } from 'react';

export const Notification: SFCModel<NotificationPropsModel> = ({
  color = THEME_COLOR.PRIMARY,
  icon,
  id,
  isPermanent,
  message,
  title,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState<boolean>(true);
  const theme = useTheme();

  const _handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => dispatch(notificationActions.remove(id)), theme.animation.duration);
  }, [id, setIsVisible, theme.animation.duration]);

  const isMounted = useIsMounted(
    {
      onMount: isPermanent
        ? undefined
        : async () => {
            await sleep({ duration: NOTIFICATION_DURATION });
            isMounted && _handleClose();
          },
    },
    [id, _handleClose, isPermanent],
  );

  return (
    <Appear
      isCenter
      isScalable
      isVisible={isVisible}
      style={styles}>
      <Wrapper
        backgroundColor={color}
        isOverflowHidden
        isShadow
        mBottom
        position={SHAPE_POSITION.RELATIVE}
        round
        width={NOTIFICATION_WIDTH}>
        {isPermanent ? null : (
          <Wrapper
            animation={{
              animation: { from: { width: 0 }, to: { width: NOTIFICATION_WIDTH } },
              duration: NOTIFICATION_DURATION,
            }}
            backgroundColor={color}
            backgroundShade={THEME_SHADE.LIGHT}
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
            color={THEME_RELATIVE_COLOR.CONTRAST}
            icon={icon}
            size={THEME_SIZE.LARGE}
          />

          <Wrapper
            basis={0}
            grow
            isWrap
            spacing="s">
            {title && (
              <Text
                color={THEME_RELATIVE_COLOR.CONTRAST}
                isBold>
                {t(title)}
              </Text>
            )}

            {message && <Text color={THEME_RELATIVE_COLOR.CONTRAST}>{t(message)}</Text>}
          </Wrapper>

          <Icon
            color={THEME_RELATIVE_COLOR.CONTRAST}
            from={color ? { backgroundColor: theme.colors[color].main } : undefined}
            icon={ICON.times}
            onPress={_handleClose}
            to={color ? { backgroundColor: theme.colors[color].dark } : undefined}
          />
        </Wrapper>
      </Wrapper>
    </Appear>
  );
};
