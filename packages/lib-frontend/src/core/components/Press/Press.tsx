import { Activate } from '@lib/frontend/core/components/Activate/Activate';
import { Modal } from '@lib/frontend/core/components/Modal/Modal';
import type { PressPropsModel } from '@lib/frontend/core/components/Press/Press.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import { lazy } from '@lib/frontend/core/utils/lazy/lazy';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { isFunction } from 'lodash';
import { useState } from 'react';

const { Button } = lazy(() => import('@lib/frontend/core/components/Button/Button'));

export const Press: SFCModel<PressPropsModel> = ({
  children,
  confirmMessage,
  from,
  isCenter = true,
  isDisabled,
  isPressed,
  onPress,
  to,
  ...props
}) => {
  const { t } = useTranslation();
  const [confirmModalIsOpen, setConfirmModalIsOpen] = useState<boolean>(false);
  const theme = useTheme();

  const _handlePress = isDisabled
    ? undefined
    : confirmMessage
    ? () => setConfirmModalIsOpen(true)
    : onPress;

  return (
    <>
      <Activate>
        {(isActive) => {
          const _isActive = !isDisabled && (isActive || isPressed);
          const _from = from || { backgroundColor: theme.colors.neutral.main };
          return (
            <Wrapper
              {...props}
              animation={{
                from: _from,
                to: _isActive ? to || { backgroundColor: theme.colors.neutral.muted } : _from,
              }}
              isCenter={isCenter}
              isRowAlign
              onPress={_handlePress}
              p
              round>
              {isFunction(children) ? children(_isActive || false) : children}
            </Wrapper>
          );
        }}
      </Activate>

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
