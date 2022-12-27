import { Activate } from '@lib/frontend/core/components/Activate/Activate';
import type { ButtonPropsModel } from '@lib/frontend/core/components/Button/Button.models';
import { Modal } from '@lib/frontend/core/components/Modal/Modal';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { ICON } from '@lib/frontend/core/decorators/withIconProps/withIconProps.constants';
import { useMount } from '@lib/frontend/core/hooks/useMount/useMount';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_BASIC_SIZE, THEME_COLOR } from '@lib/frontend/style/style.constants';
import { promisify } from '@lib/shared/core/utils/promisify/promisify';
import { useState } from 'react';

export const Button: SFCModel<ButtonPropsModel> = ({
  children,
  color = THEME_COLOR.PRIMARY,
  icon,
  isDisabled,
  isLoading,
  isPressed,
  confirmMessage,
  onPress,
  size = THEME_BASIC_SIZE.MEDIUM,
  ...props
}) => {
  const { t } = useTranslation();
  const [confirmModalIsOpen, setConfirmModalIsOpen] = useState<boolean>(false);
  const [isLoadingState, setLoadingState] = useState<boolean>(false);

  const { styles } = useStyles({ props });
  const theme = useTheme();
  const isMounted = useMount();

  const _isLoading = isLoading || isLoadingState;
  const _isBlocked = isDisabled || _isLoading;

  const _handlePress = async (): Promise<void> => {
    isMounted && setLoadingState(true);
    onPress && (await promisify(onPress)());
    isMounted && setLoadingState(false);
  };

  return (
    <>
      <Activate>
        {(isActive) => {
          const _isActive = !isDisabled && (isActive || isPressed);
          const _from = { backgroundColor: theme.colors.neutral.main };
          return (
            <Wrapper
              animation={{
                from: _from,
                to: _isActive ? { backgroundColor: theme.colors.neutral.muted } : _from,
              }}
              height={theme.shape.height[size]}
              isCenter
              isRowAlign
              onPress={() =>
                _isBlocked
                  ? undefined
                  : confirmMessage
                  ? setConfirmModalIsOpen(true)
                  : _handlePress()
              }
              p
              round
              style={styles}>
              {children && <Text>{children}</Text>}
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
