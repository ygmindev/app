import { ANIMATION_STATES_FOCUSABLE } from '@lib/frontend/animation/animation.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import {
  type FocusableRefModel,
  type FocusableWrapperPropsModel,
} from '@lib/frontend/data/components/FocusableWrapper/FocusableWrapper.models';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { forwardRef, useImperativeHandle } from 'react';

export const FocusableWrapper: RLFCModel<FocusableRefModel, FocusableWrapperPropsModel> =
  forwardRef(({ children, elementState, error, onElementStateChange, ...props }, ref) => {
    const theme = useTheme();
    const { wrapperProps } = useLayoutStyles({ props });
    const { valueControlled, valueControlledSet } = useValueControlled({
      onChange: onElementStateChange,
      value: elementState,
    });
    const isError = !!error;
    useImperativeHandle(ref, () => ({
      blur: () => valueControlledSet(ELEMENT_STATE.INACTIVE),
      focus: () => valueControlledSet(ELEMENT_STATE.ACTIVE),
    }));
    return (
      <Wrapper
        {...wrapperProps}
        animation={{ states: ANIMATION_STATES_FOCUSABLE({ isError, theme }) }}
        border={wrapperProps.border ?? true}
        elementState={valueControlled}
        isOverflowHidden
        onElementStateChange={valueControlledSet}
        round>
        {children}
      </Wrapper>
    );
  });
