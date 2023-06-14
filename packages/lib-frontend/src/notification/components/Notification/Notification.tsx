import { useRef } from 'react';

import { ANIMATION_STATES_APPEARABLE } from '#lib-frontend/animation/animation.constants';
import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { Icon } from '#lib-frontend/core/components/Icon/Icon';
import { Text } from '#lib-frontend/core/components/Text/Text';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import type { WrapperRefModel } from '#lib-frontend/core/components/Wrapper/Wrapper.models';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import type { SFCModel } from '#lib-frontend/core/core.models';
import { useAsync } from '#lib-frontend/core/hooks/useAsync/useAsync';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import {
  NOTIFICATION_DURATION,
  NOTIFICATION_WIDTH,
} from '#lib-frontend/notification/components/Notification/Notification.constants';
import type { NotificationPropsModel } from '#lib-frontend/notification/components/Notification/Notification.models';
import { useNotification } from '#lib-frontend/notification/hooks/useNotification/useNotification';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import {
  THEME_COLOR,
  THEME_ROLE,
  THEME_SIZE,
  THEME_SIZE_MORE,
} from '#lib-frontend/style/style.constants';
import { SHAPE_POSITION } from '#lib-frontend/style/utils/styler/shapeStyler/shapeStyler.constants';
import { sleep } from '#lib-shared/core/utils/sleep/sleep';

export const Notification: SFCModel<NotificationPropsModel> = ({
  color = THEME_COLOR.PRIMARY,
  icon,
  id,
  isInfinite,
  message,
  testID,
  title,
  ...props
}) => {
  const { styles } = useStyles({ props });
  const { t } = useTranslation();
  const { remove } = useNotification();
  const barRef = useRef<WrapperRefModel>(null);

  useAsync(
    async (isMounted) => {
      if (!isInfinite) {
        barRef.current?.toState(ELEMENT_STATE.ACTIVE);
        await sleep({ duration: NOTIFICATION_DURATION });
        isMounted() && remove(id);
      }
    },
    [isInfinite, remove, id],
  );

  return (
    <Wrapper
      animation={{ states: ANIMATION_STATES_APPEARABLE }}
      backgroundColor={color}
      elementState={ELEMENT_STATE.ACTIVE}
      isOverflowHidden
      isShadow
      mTop={THEME_SIZE.SMALL}
      position={SHAPE_POSITION.RELATIVE}
      round
      style={styles}
      testID={testID}
      width={NOTIFICATION_WIDTH}>
      {!isInfinite && (
        <Wrapper
          animation={{
            duration: NOTIFICATION_DURATION,
            states: {
              [ELEMENT_STATE.ACTIVE]: { width: NOTIFICATION_WIDTH },
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
          colorRole={THEME_ROLE.MAIN_CONTRAST}
          fontSize={THEME_SIZE_MORE.LARGE}
          icon={icon}
        />

        <Wrapper
          basis={0}
          grow
          isWrap
          spacing={THEME_SIZE_MORE.SMALL}>
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
          type={BUTTON_TYPE.FILLED}
        />
      </Wrapper>
    </Wrapper>
  );
};
