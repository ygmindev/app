import { Activate } from '@lib/frontend/core/components/Activate/Activate';
import { Modal } from '@lib/frontend/core/components/Modal/Modal';
import type { PressPropsModel } from '@lib/frontend/core/components/Press/Press.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Tooltip } from '@lib/frontend/core/components/Tooltip/Tooltip';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import { lazy } from '@lib/frontend/core/utils/lazy/lazy';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import type { StyleModel } from '@lib/frontend/style/style.models';
import { useTracking } from '@lib/frontend/tracking/hooks/useTracking/useTracking';
import { isEmpty } from '@lib/shared/core/utils/isEmpty/isEmpty';
import { isFunction } from 'lodash';
import { useState } from 'react';

const { Button } = lazy(() => import('@lib/frontend/core/components/Button/Button'));

export const Press: SFCModel<PressPropsModel> = ({
  // tracking,
  children,
  confirmMessage,
  from,
  isCenter = true,
  isDisabled,
  isFullWidth,
  isPressed,
  onPress,
  onPressIn,
  onPressOut,
  testID,
  to,
  tooltip,
  ...props
}) => {
  const { t } = useTranslation();
  const { styles } = useStyles({ props });
  const { track } = useTracking();
  const [confirmModalIsOpen, setConfirmModalIsOpen] = useState<boolean>(false);

  const theme = useTheme();

  // const _handlePress = tracking
  //   ? () => {
  //       track({
  //         object: tracking.object,
  //         action: ANALYTICS_ACTION_PRESS,
  //         params: tracking.params,
  //       });
  //       onPress && onPress();
  //     }
  //   : onPress;

  const _handlePress = onPress;

  const Container = tooltip && !isPressed ? Tooltip : Activate;
  const containerProps = tooltip && !isPressed ? { tooltip } : {};

  return (
    <>
      <Container {...containerProps}>
        {(isActive) => {
          const _isActive = !isDisabled && (isActive || isPressed);
          return (
            <Wrapper
              // animation={{ transition: ['backgroundColor'] }}
              p
              {...props}
              isCenter={isCenter}
              isFullWidth={isFullWidth}
              isRowAlign
              onPress={
                isDisabled
                  ? undefined
                  : confirmMessage
                  ? () => setConfirmModalIsOpen(true)
                  : _handlePress
              }
              onPressIn={onPressIn}
              onPressOut={onPressOut}
              round
              style={
                [
                  styles,
                  _isActive
                    ? isEmpty(to)
                      ? { backgroundColor: theme.colors.background.muted }
                      : to
                    : isEmpty(from)
                    ? { backgroundColor: theme.colors.background.main }
                    : from,
                ].filter(Boolean) as Array<StyleModel>
              }>
              {isFunction(children) ? children(isActive || isPressed) : children}
            </Wrapper>
          );
        }}
      </Container>

      {confirmMessage && (
        <Modal
          isOpen={confirmModalIsOpen}
          onClose={() => setConfirmModalIsOpen(false)}>
          <Wrapper
            grow
            isCenter
            spacing>
            {confirmMessage && <Text>{confirmMessage}</Text>}

            <Wrapper isRowAlign>
              <Button
                icon={ICON.chevronLeft}
                isDisabled={isDisabled}
                isTransparent
                onPress={() => setConfirmModalIsOpen(false)}>
                {t('core:labels.cancel')}
              </Button>

              <Button
                icon={ICON.chevronRight}
                isDisabled={isDisabled}
                onPress={async () => {
                  onPress && onPress();
                  return setConfirmModalIsOpen(false);
                }}>
                {t('core:labels.continue')}
              </Button>
            </Wrapper>
          </Wrapper>
        </Modal>
      )}
    </>
  );
};
