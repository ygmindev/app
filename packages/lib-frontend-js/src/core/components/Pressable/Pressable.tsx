import { Activatable } from '@lib/frontend/core/components/Activatable/Activatable';
import { AsyncText } from '@lib/frontend/core/components/AsyncText/AsyncText';
import { Button } from '@lib/frontend/core/components/Button/Button';
import { Droppable } from '@lib/frontend/core/components/Droppable/Droppable';
import { Modal } from '@lib/frontend/core/components/Modal/Modal';
import {
  type PressablePropsModel,
  type PressableRefModel,
} from '@lib/frontend/core/components/Pressable/Pressable.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { useElementStateControlled } from '@lib/frontend/core/hooks/useElementStateControlled/useElementStateControlled';
import { useTranslation } from '@lib/frontend/locale/hooks/useTranslation/useTranslation';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR_MORE, THEME_ROLE, THEME_SIZE } from '@lib/frontend/style/style.constants';
import { isPromise } from '@lib/shared/core/utils/isPromise/isPromise';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';
import isFunction from 'lodash/isFunction';
import { forwardRef, useState } from 'react';

export const Pressable: RLFCModel<PressableRefModel, PressablePropsModel> = forwardRef(
  (
    {
      animation,
      children,
      confirmColor,
      confirmMessage,
      elementState,
      onActive,
      onElementStateChange,
      onInactive,
      onPress,
      onPressIn,
      onPressOut,
      round,
      tooltip,
      trigger,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme();
    const { t } = useTranslation();
    const [confirmModalIsOpen, confirmModalIsOpenSet] = useState<boolean | undefined>();
    const { wrapperProps } = useLayoutStyles({ props });

    const { elementStateControlled, elementStateControlledSet, isBlocked } =
      useElementStateControlled({ elementState, onElementStateChange });

    const handleButtonPress = onPress
      ? async (): Promise<void> => {
          if (!isBlocked) {
            if (confirmMessage) {
              confirmModalIsOpenSet(true);
            } else {
              await handlePress?.();
            }
          }
        }
      : undefined;

    const handlePress = onPress
      ? async (): Promise<void> => {
          if (!isBlocked) {
            const result = onPress && onPress();
            if (isPromise(result)) {
              elementStateControlledSet(ELEMENT_STATE.LOADING);
              await result;
              elementStateControlledSet(ELEMENT_STATE.INACTIVE);
            }
          }
        }
      : undefined;

    const element = (
      <>
        <Activatable
          onActive={
            onPress
              ? () => {
                  onActive && onActive();
                  elementStateControlledSet(ELEMENT_STATE.ACTIVE);
                }
              : undefined
          }
          onInactive={
            onPress
              ? () => {
                  onInactive && onInactive();
                  elementStateControlledSet(ELEMENT_STATE.INACTIVE);
                }
              : undefined
          }
          trigger={trigger}>
          <Wrapper
            {...wrapperProps}
            animation={{
              states: {
                ...animation?.states,
                [ELEMENT_STATE.ACTIVE]: animation?.states?.[ELEMENT_STATE.ACTIVE] ?? {
                  backgroundColor: theme.color.border,
                },
                [ELEMENT_STATE.INACTIVE]: animation?.states?.[ELEMENT_STATE.INACTIVE] ?? {
                  backgroundColor: theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.MUTED],
                },
              },
            }}
            elementState={elementStateControlled}
            onPress={handleButtonPress}
            onPressIn={onPressIn}
            onPressOut={onPressOut}
            pHorizontal
            pVertical={THEME_SIZE.SMALL}
            ref={ref}
            round={round}>
            {isFunction(children)
              ? children(elementStateControlled === ELEMENT_STATE.ACTIVE)
              : children}
          </Wrapper>
        </Activatable>

        {confirmMessage && (
          <Modal
            isOpen={confirmModalIsOpen}
            onToggle={confirmModalIsOpenSet}>
            <Wrapper
              flex
              isCenter
              s>
              {confirmMessage && <AsyncText>{confirmMessage}</AsyncText>}

              <Wrapper
                isAlign
                isRow>
                <Button
                  elementState={elementStateControlled}
                  icon="chevronLeft"
                  onPress={async () => confirmModalIsOpenSet(false)}>
                  {t('core:cancel')}
                </Button>

                <Button
                  color={confirmColor}
                  elementState={elementStateControlled}
                  icon="chevronRight"
                  onPress={async () => {
                    await handlePress?.();
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

    return tooltip ? (
      <Droppable anchor={() => element}>
        <AsyncText>{tooltip}</AsyncText>
      </Droppable>
    ) : (
      element
    );
  },
);

process.env.APP_IS_DEBUG && (Pressable.displayName = variableName({ Pressable }));
