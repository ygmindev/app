import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useMount } from '@lib/frontend/core/hooks/useMount/useMount';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import {
  NOTIFICATION_DURATION,
  NOTIFICATION_WIDTH,
} from '@lib/frontend/notification/components/Notification/Notification.constants';
import type { NotificationPropsModel } from '@lib/frontend/notification/components/Notification/Notification.models';
import { useNotification } from '@lib/frontend/notification/hooks/useNotification/useNotification';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
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
    <Appearable
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
            // animation={{
            //   duration: NOTIFICATION_DURATION,
            //   from: { width: 0 },
            //   to: { width: NOTIFICATION_WIDTH },
            // }}
            backgroundColor={color}
            backgroundShade={THEME_COLOR_SHADE.LIGHT}
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
            from={color ? { backgroundColor: theme.colors.tone[color].main } : undefined}
            icon={ICONS.times}
            onPress={() => remove(id)}
            to={color ? { backgroundColor: theme.colors.tone[color].dark } : undefined}
          />
        </Wrapper>
      </Wrapper>
    </Appearable>
  );
};
