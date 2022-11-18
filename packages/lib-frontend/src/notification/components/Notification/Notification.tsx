import { Appear } from '@lib/frontend/animation/components/Appear/Appear';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import { useMount } from '@lib/frontend/core/hooks/useMount/useMount';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import {
  NOTIFICATION_DURATION,
  NOTIFICATION_WIDTH,
} from '@lib/frontend/notification/components/Notification/Notification.constants';
import type { NotificationPropsModel } from '@lib/frontend/notification/components/Notification/Notification.models';
import { useNotification } from '@lib/frontend/notification/hooks/useNotification/useNotification';
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

export const Notification: SFCModel<NotificationPropsModel> = ({
  color = THEME_COLOR.PRIMARY,
  icon,
  id,
  isInfinite,
  isRemoving,
  message,
  title,
  ...props
}) => {
  const theme = useTheme();
  const { styles } = useStyles({ props });
  const { t } = useTranslation();
  const { remove } = useNotification();

  const isMounted = useMount(
    {
      onMount: isInfinite
        ? undefined
        : async () => {
            await sleep({ duration: NOTIFICATION_DURATION });
            isMounted && remove(id);
          },
    },
    [id, remove, isInfinite],
  );

  return (
    <Appear
      isCenter
      isScalable
      isVisible={!isRemoving}
      style={styles}>
      <Wrapper
        backgroundColor={color}
        isOverflowHidden
        isShadow
        mBottom
        position={SHAPE_POSITION.RELATIVE}
        round
        width={NOTIFICATION_WIDTH}>
        {isInfinite ? null : (
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
            isTitle
          />

          <Wrapper
            basis={0}
            grow
            isWrap
            spacing={THEME_SIZE.SMALL}>
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
            onPress={() => remove(id)}
            to={color ? { backgroundColor: theme.colors[color].dark } : undefined}
          />
        </Wrapper>
      </Wrapper>
    </Appear>
  );
};
