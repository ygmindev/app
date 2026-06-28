import { ANIMATION_STATES_FOCUSABLE } from '@lib/frontend/animation/animation.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { useElementStateControlled } from '@lib/frontend/core/hooks/useElementStateControlled/useElementStateControlled';
import {
  type FocusableRefModel,
  type FocusableWrapperPropsModel,
} from '@lib/frontend/data/components/FocusableWrapper/FocusableWrapper.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { useImperativeHandle } from 'react';

export const FocusableWrapper: RLFCModel<FocusableRefModel, FocusableWrapperPropsModel> = ({
  children,
  elementState,
  error,
  onElementStateChange,
  ref,
  ...props
}) => {
  const theme = useTheme();
  const { wrapperProps } = useLayoutStyles({ props });
  const { elementStateControlled, elementStateControlledSet, isBlocked } =
    useElementStateControlled({ elementState, onElementStateChange });

  const isError = !!error;

  useImperativeHandle(ref, () => ({
    blur: () => elementStateControlledSet(ELEMENT_STATE.INACTIVE),
    focus: () => elementStateControlledSet(ELEMENT_STATE.ACTIVE),
  }));

  return (
    <Wrapper
      {...wrapperProps}
      animation={{ states: ANIMATION_STATES_FOCUSABLE({ isBlocked, isError, theme }) }}
      border={wrapperProps.border ?? true}
      elementState={elementStateControlled}
      isOverflowHidden
      onElementStateChange={elementStateControlledSet}
      round>
      {children}
    </Wrapper>
  );
};
