import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Modal } from '@lib/frontend/core/components/Modal/Modal';
import { type PressablePropsModel } from '@lib/frontend/core/components/Pressable/Pressable.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type WrapperRefModel } from '@lib/frontend/core/components/Wrapper/Wrapper.models';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type ElementStateModel, type RLFCModel } from '@lib/frontend/core/core.models';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { isPromise } from '@lib/shared/core/utils/isPromise/isPromise';
import { useState } from 'react';

export const Pressable: RLFCModel<WrapperRefModel, PressablePropsModel> = ({
  animation,
  children,
  confirmMessage,
  elementState,
  onActive,
  onElementStateChange,
  onInactive,
  onPress,
  onPressIn,
  onPressOut,
  round,
  trigger,
  ...props
}) => {
  const theme = useTheme();
  const { t } = useTranslation();
  const [confirmModalIsOpen, confirmModalIsOpenSet] = useState<boolean | undefined>();
  const { wrapperProps } = useLayoutStyles({ props });

  const { valueControlled, valueControlledSet } = useValueControlled<ElementStateModel>({
    defaultValue: ELEMENT_STATE.INACTIVE,
    onChange: onElementStateChange,
    value: elementState,
  });

  const isDisabled =
    valueControlled === ELEMENT_STATE.DISABLED || valueControlled === ELEMENT_STATE.LOADING;

  const handleButtonPress = async (): Promise<void> => {
    if (!isDisabled) {
      if (confirmMessage) {
        confirmModalIsOpenSet(true);
      } else {
        await handlePress();
      }
    }
  };

  const handlePress = async (): Promise<void> => {
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
        onActive={() => {
          onActive && onActive();
          valueControlledSet(ELEMENT_STATE.ACTIVE);
        }}
        onInactive={() => {
          onInactive && onInactive();
          valueControlledSet(ELEMENT_STATE.INACTIVE);
        }}
        trigger={trigger}>
        <Wrapper
          {...wrapperProps}
          animation={{
            states: {
              ...animation?.states,
              [ELEMENT_STATE.ACTIVE]: animation?.states?.active ?? {
                backgroundColor: theme.color.border,
              },
              [ELEMENT_STATE.INACTIVE]: animation?.states?.inactive ?? {
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
          round={round}>
          {children}
        </Wrapper>
      </Activatable>

      {confirmMessage && (
        <Modal
          isOpen={confirmModalIsOpen}
          onToggle={confirmModalIsOpenSet}
          testID="XXX">
          <Wrapper
            grow
            isCenter
            s>
            {confirmMessage && <AsyncText>{confirmMessage}</AsyncText>}

            <Wrapper
              isAlign
              isRow>
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
