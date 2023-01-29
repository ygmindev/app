import type { AnimatableRefModel } from '@lib/frontend/animation/animation.models';
import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import { Modal } from '@lib/frontend/core/components/Modal/Modal';
import type { PressablePropsModel } from '@lib/frontend/core/components/Pressable/Pressable.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import type { ElementStateModel, SFCModel } from '@lib/frontend/core/core.models';
import { useMount } from '@lib/frontend/core/hooks/useMount/useMount';
import { lazy } from '@lib/frontend/core/utils/lazy/lazy';
import { useFieldValue } from '@lib/frontend/form/hooks/useField/useField';
import { TranslatableText } from '@lib/frontend/locale/components/TranslatableText/TranslatableText';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '@lib/frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_BASIC_SIZE } from '@lib/frontend/style/style.constants';
import type { CallablePromiseModel } from '@lib/shared/core/core.models';
import { isPromise } from '@lib/shared/core/utils/isPromise/isPromise';
import { useRef, useState } from 'react';

const { Button } = lazy(() => import('@lib/frontend/core/components/Button/Button'));

export const Pressable: SFCModel<PressablePropsModel> = ({
  animation,
  children,
  confirmMessage,
  elementState,
  onElementStateChange,
  onPress,
  ...props
}) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [confirmModalIsOpen, setConfirmModalIsOpen] = useState<boolean>(false);
  const isMounted = useMount();
  const ref = useRef<AnimatableRefModel>(null);
  const { styles } = useStyles({ props });

  const { fieldValue, setFieldValue } = useFieldValue<ElementStateModel>({
    defaultValue: ELEMENT_STATE.INACTIVE,
    onChange: onElementStateChange,
    value: elementState,
  });

  const _isDisabled = fieldValue === ELEMENT_STATE.DISABLED || fieldValue === ELEMENT_STATE.LOADING;

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
        isMounted && setFieldValue(ELEMENT_STATE.LOADING);
        await result;
        isMounted && setFieldValue(ELEMENT_STATE.INACTIVE);
      }
    }
  };

  return (
    <>
      <Activatable
        onActive={() => setFieldValue(ELEMENT_STATE.ACTIVE)}
        onInactive={() => setFieldValue(ELEMENT_STATE.INACTIVE)}>
        <Wrapper
          {...props}
          animation={{
            ...animation,
            states: {
              ...animation?.states,
              [ELEMENT_STATE.ACTIVE]: animation?.states?.active || {
                backgroundColor: theme.colors.tone.neutral.muted,
              },
              [ELEMENT_STATE.INACTIVE]: animation?.states?.inactive || {
                backgroundColor: theme.colors.tone.neutral.main,
              },
            },
          }}
          elementState={fieldValue}
          onPress={_handleButtonPress}
          pHorizontal
          pVertical={THEME_BASIC_SIZE.SMALL}
          ref={ref}
          round
          style={styles}>
          {children}
        </Wrapper>
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
                elementState={fieldValue}
                icon="chevronLeft"
                onPress={async () => setConfirmModalIsOpen(false)}>
                {t('core:labels.cancel')}
              </Button>

              <Button
                elementState={fieldValue}
                icon="chevronRight"
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
