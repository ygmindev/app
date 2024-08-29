import { ANIMATION_STATES_APPEARABLE } from '@lib/frontend/animation/animation.constants';
import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LFCModel } from '@lib/frontend/core/core.models';
import { type NotificationPropsModel } from '@lib/frontend/notification/components/Notification/Notification.models';
import { useNotification } from '@lib/frontend/notification/hooks/useNotification/useNotification';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR, THEME_ROLE, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { SHAPE_POSITION } from '@lib/frontend/style/utils/styler/shapeStyler/shapeStyler.constants';

export const Notification: LFCModel<NotificationPropsModel> = ({
  color = THEME_COLOR.PRIMARY,
  description,
  icon,
  id,
  isInfinite,
  title,
  ...props
}) => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { remove } = useNotification();
  const theme = useTheme();

  return (
    <Wrapper
      {...wrapperProps}
      animation={{ states: ANIMATION_STATES_APPEARABLE }}
      backgroundColor={color}
      elementState={ELEMENT_STATE.ACTIVE}
      isOverflowHidden
      isShadow
      position={SHAPE_POSITION.RELATIVE}
      round
      width={theme.notification.width}>
      {!isInfinite && (
        <Wrapper
          animation={{
            duration: theme.notification.duration,
            states: {
              [ELEMENT_STATE.ACTIVE]: { width: theme.notification.width },
              [ELEMENT_STATE.INACTIVE]: { width: 0 },
            },
          }}
          backgroundColor={color}
          backgroundRole={THEME_ROLE.MUTED}
          elementState={ELEMENT_STATE.ACTIVE}
          height={6}
          position={SHAPE_POSITION.ABSOLUTE}
          right={0}
          top={0}
          zIndex={1}
        />
      )}

      <Wrapper
        flex
        isAlign
        isRow
        p>
        <Icon
          color={color}
          colorRole={THEME_ROLE.CONTRAST}
          fontSize={THEME_SIZE.LARGE}
          icon={icon}
        />

        <Wrapper
          basis={0}
          flex
          isWrap
          s={THEME_SIZE.SMALL}>
          {title && (
            <AsyncText
              color={color}
              colorRole={THEME_ROLE.CONTRAST}
              isBold>
              {title}
            </AsyncText>
          )}

          {description && (
            <AsyncText
              color={color}
              colorRole={THEME_ROLE.CONTRAST}>
              {description}
            </AsyncText>
          )}
        </Wrapper>

        <Button
          color={color}
          icon="times"
          onPress={() => id && remove(id)}
          type={BUTTON_TYPE.FILLED}
        />
      </Wrapper>
    </Wrapper>
  );
};
