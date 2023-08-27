import { forwardRef, useImperativeHandle } from 'react';

import { type AnimationModel } from '#lib-frontend/animation/animation.models';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type ElementStateModel, type RLFCModel } from '#lib-frontend/core/core.models';
import {
  type FocusableRefModel,
  type FocusableWrapperPropsModel,
} from '#lib-frontend/form/components/FocusableWrapper/FocusableWrapper.models';
import { useValueControlled } from '#lib-frontend/form/hooks/useValueControlled/useValueControlled';
import { TranslatableText } from '#lib-frontend/locale/components/TranslatableText/TranslatableText';
import { isTranslatableText } from '#lib-frontend/locale/utils/isTranslatableText/isTranslatableText';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';
import { THEME_COLOR, THEME_ROLE, THEME_SIZE } from '#lib-frontend/style/style.constants';

export const FocusableWrapper: RLFCModel<FocusableRefModel, FocusableWrapperPropsModel> =
  forwardRef(({ children, elementState, error, onElementStateChange, ...props }, ref) => {
    const theme = useTheme();
    const { ...wrapperProps } = useLayoutStyles({ props });
    const { valueControlled, valueControlledSet } = useValueControlled<ElementStateModel>({
      onChange: onElementStateChange,
      value: elementState,
    });
    const isError = !!error;

    const activeColor = isError
      ? theme.color.palette[THEME_COLOR.ERROR][THEME_ROLE.MAIN]
      : theme.color.palette[THEME_COLOR.PRIMARY][THEME_ROLE.MAIN];
    const inactiveColor = isError
      ? theme.color.palette[THEME_COLOR.ERROR][THEME_ROLE.MAIN]
      : theme.color.border;

    useImperativeHandle(ref, () => ({
      blur: () => valueControlledSet(ELEMENT_STATE.INACTIVE),
      focus: () => valueControlledSet(ELEMENT_STATE.ACTIVE),
    }));

    const animation: AnimationModel = {
      states: {
        [ELEMENT_STATE.INACTIVE]: { borderColor: inactiveColor, opacity: 1.0 },
        [ELEMENT_STATE.ACTIVE]: { borderColor: activeColor, opacity: 1.0 },
        [ELEMENT_STATE.DISABLED]: { borderColor: activeColor, opacity: theme.opaque },
        [ELEMENT_STATE.LOADING]: { borderColor: activeColor, opacity: theme.opaque },
      },
    };

    return (
      <Wrapper
        {...wrapperProps}
        s={THEME_SIZE.SMALL}>
        <Wrapper
          animation={animation}
          border
          elementState={valueControlled}
          onElementStateChange={valueControlledSet}
          round>
          {children}
        </Wrapper>

        {error && isTranslatableText(error) && (
          <TranslatableText
            color={THEME_COLOR.ERROR}
            fontSize={THEME_SIZE.SMALL}>
            {error}
          </TranslatableText>
        )}
      </Wrapper>
    );
  });
