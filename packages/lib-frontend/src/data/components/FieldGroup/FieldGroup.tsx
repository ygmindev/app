import some from 'lodash/some';
import { cloneElement, Fragment, useState } from 'react';

import { ANIMATION_STATES_FOCUSABLE } from '#lib-frontend/animation/animation.constants';
import { Divider } from '#lib-frontend/core/components/Divider/Divider';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type ElementStateModel, type LFCModel } from '#lib-frontend/core/core.models';
import { type FieldGroupPropsModel } from '#lib-frontend/data/components/FieldGroup/FieldGroup.models';
import { FocusableWrapper } from '#lib-frontend/data/components/FocusableWrapper/FocusableWrapper';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { useTheme } from '#lib-frontend/style/hooks/useTheme/useTheme';

export const FieldGroup: LFCModel<FieldGroupPropsModel> = ({ fields, isVertical, ...props }) => {
  const theme = useTheme();
  const { wrapperProps } = useLayoutStyles({ props });
  const [elementState, elementStateSet] = useState<ElementStateModel>();
  const isError = some(fields, (field) => !!field.element.props.error);
  return (
    <FocusableWrapper
      {...wrapperProps}
      elementState={elementState}
      error={isError}
      isRow={!isVertical}
      onElementStateChange={elementStateSet}>
      {fields.map(({ element, id }, i) => (
        <Fragment key={id}>
          {i && (
            <Divider
              animation={{ states: ANIMATION_STATES_FOCUSABLE({ isError, theme }) }}
              elementState={elementState}
              isVertical={!isVertical}
              key={`${id}-divider`}
            />
          )}

          <Wrapper
            grow
            key={`${id}-field`}
            shrink>
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
