import { useState } from 'react';

import { Activatable } from '#lib-frontend/core/components/Activatable/Activatable';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { Modal } from '#lib-frontend/core/components/Modal/Modal';
import { type PressablePropsModel } from '#lib-frontend/core/components/Pressable/Pressable.models';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type ElementStateModel, type SFCModel } from '#lib-frontend/core/core.models';
import { lazy } from '#lib-frontend/core/utils/lazy/lazy';
import { useControlledValue } from '#lib-frontend/form/hooks/useControlledValue/useControlledValue';
import { TranslatableText } from '#lib-frontend/locale/components/TranslatableText/TranslatableText';
import { useTranslation } from '#lib-frontend/locale/hooks/useTranslation/useTranslation';
import { useStyles } from '#lib-frontend/style/hooks/useStyles/useStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '#lib-frontend/style/style.constants';
import { type CallablePromiseModel } from '#lib-shared/core/core.models';
import { isPromise } from '#lib-shared/core/utils/isPromise/isPromise';

const { Button } = lazy(() => import('#lib-frontend/core/components/Button/Button'));

export const Pressable: SFCModel<PressablePropsModel> = ({
  animation,
  children,
  confirmMessage,
  elementState,
  onElementStateChange,
  onPress,
  onPressIn,
  onPressOut,
  ...props
}) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [confirmModalIsOpen, confirmModalIsOpenSet] = useState<boolean>(false);
  const { styles } = useStyles({ props });

  const { valueControlled, valueControlledSet } = useControlledValue<ElementStateModel>({
    defaultValue: ELEMENT_STATE.INACTIVE,
    onChange: onElementStateChange,
    value: elementState,
  });

  const isDisabled =
    valueControlled === ELEMENT_STATE.DISABLED || valueControlled === ELEMENT_STATE.LOADING;

  const handleButtonPress: CallablePromiseModel = async () => {
    if (!isDisabled) {
      if (confirmMessage) {
        confirmModalIsOpenSet(true);
      } else {
        await handlePress();
      }
    }
  };

  const handlePress: CallablePromiseModel = async () => {
    if (!isDisabled) {
      const result = onPress && onPress();
      if (isPromise(result)) {
        valueControlledSet(ELEMENT_STATE.LOADING);
        await result;
        valueControlledSet(ELEMENT_STATE.INACTIVE);
      }
    }
  };

  return (
    <>
      <Activatable
        onActive={() => valueControlledSet(ELEMENT_STATE.ACTIVE)}
        onInactive={() => valueControlledSet(ELEMENT_STATE.INACTIVE)}
        style={styles}>
        <Wrapper
          {...props}
          animation={{
            ...animation,
            states: {
              ...animation?.states,
              [ELEMENT_STATE.ACTIVE]: animation?.states?.active || {
                backgroundColor: theme.color.border,
              },
              [ELEMENT_STATE.INACTIVE]: animation?.states?.inactive || {
                backgroundColor: theme.color.palette.surface.muted,
              },
            },
          }}
          elementState={valueControlled}
          onPress={handleButtonPress}
          onPressIn={onPressIn}
          onPressOut={onPressOut}
          pHorizontal
          pVertical={THEME_SIZE.SMALL}
          round>
          {children}
        </Wrapper>
      </Activatable>

      {confirmMessage && (
        <Modal
          isOpen={confirmModalIsOpen}
          onClose={() => confirmModalIsOpenSet(false)}>
          <Wrapper
            grow
            isCenter
            s>
            {confirmMessage && <TranslatableText>{confirmMessage}</TranslatableText>}

            <Wrapper isRowAlign>
              <Button
                elementState={valueControlled}
                icon="chevronLeft"
                onPress={async () => confirmModalIsOpenSet(false)}
                type={BUTTON_TYPE.TRANSPARENT}>
                {t('core:cancel')}
              </Button>

              <Button
                elementState={valueControlled}
                icon="chevronRight"
                onPress={async () => {
                  await handlePress();
                  confirmModalIsOpenSet(false);
                }}>
                {t('core:continue')}
              </Button>
            </Wrapper>
          </Wrapper>
        </Modal>
      )}
    </>
  );
};
