import { useRef } from 'react';

import { ANIMATION_STATES_APPEARABLE } from '#lib-frontend/animation/animation.constants';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { Icon } from '#lib-frontend/core/components/Icon/Icon';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { type WrapperRefModel } from '#lib-frontend/core/components/Wrapper/Wrapper.models';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type LFCModel } from '#lib-frontend/core/core.models';
import { useAsync } from '#lib-frontend/core/hooks/useAsync/useAsync';
import { TranslatableText } from '#lib-frontend/locale/components/TranslatableText/TranslatableText';
import { type NotificationPropsModel } from '#lib-frontend/notification/components/Notification/Notification.models';
import { useNotification } from '#lib-frontend/notification/hooks/useNotification/useNotification';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR, THEME_ROLE, THEME_SIZE } from '#lib-frontend/style/style.constants';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { sleep } from '#lib-shared/core/utils/sleep/sleep';

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
  const barRef = useRef<WrapperRefModel>(null);

  useAsync(
    async (isMounted) => {
      if (!isInfinite) {
        barRef.current?.toState(ELEMENT_STATE.ACTIVE);
        await sleep(theme.notification.duration);
        id && isMounted() && remove(id);
      }
    },
    [isInfinite, remove, id],
  );

  return (
    <Wrapper
      {...wrapperProps}
      animation={{ states: ANIMATION_STATES_APPEARABLE }}
      backgroundColor={color}
      elementState={ELEMENT_STATE.ACTIVE}
      isOverflowHidden
      isShadow
      mTop={THEME_SIZE.SMALL}
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
          elementState={ELEMENT_STATE.INACTIVE}
          height={6}
          position={SHAPE_POSITION.ABSOLUTE}
          ref={barRef}
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
          colorRole={THEME_ROLE.CONTRAST}
          fontSize={THEME_SIZE.LARGE}
          icon={icon}
        />

        <Wrapper
          basis={0}
          grow
          isWrap
          s={THEME_SIZE.SMALL}>
          {title && (
            <TranslatableText
              color={color}
              colorRole={THEME_ROLE.CONTRAST}
              isBold>
              {title}
            </TranslatableText>
          )}

          {description && (
            <TranslatableText
              color={color}
              colorRole={THEME_ROLE.CONTRAST}>
              {description}
            </TranslatableText>
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
