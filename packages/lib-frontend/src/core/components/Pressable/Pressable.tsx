import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import { Modal } from '@lib/frontend/core/components/Modal/Modal';
import type { PressablePropsModel } from '@lib/frontend/core/components/Pressable/Pressable.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import type { SFCModel } from '@lib/frontend/core/core.models';
import { useMount } from '@lib/frontend/core/hooks/useMount/useMount';
import { lazy } from '@lib/frontend/core/utils/lazy/lazy';
import { TranslatableText } from '@lib/frontend/locale/components/TranslatableText/TranslatableText';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import type { CallablePromiseModel } from '@lib/shared/core/core.models';
import { isPromise } from '@lib/shared/core/utils/isPromise/isPromise';
import { useState } from 'react';

const { Button } = lazy(() => import('@lib/frontend/core/components/Button/Button'));

export const Pressable: SFCModel<PressablePropsModel> = ({
  animation,
  children,
  confirmMessage,
  isDisabled,
  isLoading: isLoadingProps,
  isPressed,
  onPress,
  ...props
}) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [confirmModalIsOpen, setConfirmModalIsOpen] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const isMounted = useMount();

  const _isLoading = isLoadingProps || isLoading;
  const _isDisabled = isDisabled || _isLoading;

  const _handleButtonPress: CallablePromiseModel = async () => {
    if (!_isDisabled) {
      if (confirmMessage) {
        setConfirmModalIsOpen(true);
      } else {
        await _handlePress();
      }
    }
  };

  const _handlePress: CallablePromiseModel = async () => {
    if (!_isDisabled) {
      const result = onPress && onPress();
      if (isPromise(result)) {
        isMounted && setLoading(true);
        await result;
        isMounted && setLoading(false);
      }
    }
  };

  return (
    <>
      <Activatable>
        {(isActive) => {
          const _isActive = !isDisabled && (isActive || isPressed);
          return (
            <Wrapper
              {...props}
              animation={
                animation
                  ? animation({
                      isActive: _isActive,
                      isDisabled: _isDisabled,
                      isLoading: _isLoading,
                    })
                  : {
                      from: { backgroundColor: theme.colors.tone.neutral.main },
                      isActive: _isActive,
                      to: { backgroundColor: theme.colors.tone.neutral.muted },
                    }
              }
              onPress={_handleButtonPress}
              pHorizontal
              round>
              {children &&
                children({ isActive: _isActive, isDisabled: _isDisabled, isLoading: _isLoading })}
            </Wrapper>
          );
        }}
      </Activatable>

      {confirmMessage && (
        <Modal
          isOpen={confirmModalIsOpen}
          onClose={() => setConfirmModalIsOpen(false)}>
          <Wrapper
            grow
            isCenter
            spacing>
            {confirmMessage && <TranslatableText>{confirmMessage}</TranslatableText>}

            <Wrapper isRowAlign>
              <Button
                icon="chevronLeft"
                isDisabled={_isDisabled}
                onPress={async () => setConfirmModalIsOpen(false)}>
                {t('core:labels.cancel')}
              </Button>

              <Button
                icon="chevronRight"
                isDisabled={_isDisabled}
                onPress={async () => {
                  await _handlePress();
                  setConfirmModalIsOpen(false);
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
