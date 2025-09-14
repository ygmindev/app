import { ANIMATION_STATES_FOCUSABLE } from '@lib/frontend/animation/animation.constants';
import { Divider } from '@lib/frontend/core/components/Divider/Divider';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { FocusableWrapper } from '@lib/frontend/data/components/FocusableWrapper/FocusableWrapper';
import { type InputGroupPropsModel } from '@lib/frontend/data/components/InputGroup/InputGroup.models';
import { type InputRefModel } from '@lib/frontend/data/data.models';
import { useLayoutStyles } from '@lib/frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '@lib/frontend/style/hooks/useTheme/useTheme';
import { FLEX_JUSTIFY } from '@lib/frontend/style/utils/styler/flexStyler/flexStyler.constants';
import some from 'lodash/some';
import { cloneElement, Fragment, useState } from 'react';

export const InputGroup: RLFCModel<InputRefModel, InputGroupPropsModel> = ({
  fields,
  isVertical,
  ...props
}) => {
  const theme = useTheme();
  const { wrapperProps } = useLayoutStyles({ props });
  const [elementState, elementStateSet] = useState<ELEMENT_STATE>();
  const isError = some(fields, (field) => !!field.element.props.error);
  return (
    <FocusableWrapper
      {...wrapperProps}
      elementState={elementState}
      error={isError}
      isRow={!isVertical}
      onElementStateChange={elementStateSet}>
      {fields.map(({ element, id }, i) => (
        <Fragment key={i}>
          {i && (
            <Divider
              animation={{ states: ANIMATION_STATES_FOCUSABLE({ isError, theme }) }}
              elementState={elementState}
              isVertical={!isVertical}
              key={`${id}-divider`}
            />
          )}

          <Wrapper
            flex
            justify={FLEX_JUSTIFY.CENTER}
            key={`${id}-field`}>
            {cloneElement(element, {
              isTransparent: true,
              onBlur: () => {
                element.props.onBlur && element.props.onBlur();
                elementStateSet(ELEMENT_STATE.INACTIVE);
              },
              onFocus: () => {
                element.props.onFocus && element.props.onFocus();
                elementStateSet(ELEMENT_STATE.ACTIVE);
              },
            })}
          </Wrapper>
        </Fragment>
      ))}
    </FocusableWrapper>
  );
};
