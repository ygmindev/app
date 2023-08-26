import { type ReactElement } from 'react';

import { Button } from '#lib-frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '#lib-frontend/core/components/Button/Button.constants';
import { type RadioFieldPropsModel } from '#lib-frontend/core/components/RadioField/RadioField.models';
import { Wrapper } from '#lib-frontend/core/components/Wrapper/Wrapper';
import { ELEMENT_STATE } from '#lib-frontend/core/core.constants';
import { type LFCPropsModel } from '#lib-frontend/core/core.models';
import { useControlledValue } from '#lib-frontend/form/hooks/useControlledValue/useControlledValue';
import { useLayoutStyles } from '#lib-frontend/style/hooks/useLayoutStyles/useLayoutStyles';
import { THEME_COLOR, THEME_SIZE } from '#lib-frontend/style/style.constants';
import { FLEX_ALIGN } from '#lib-frontend/style/utils/styler/flexStyler/flexStyler.constants';

export const RadioField = <TType extends string = string>({
  color = THEME_COLOR.PRIMARY,
  defaultValue,
  elementState,
  isHorizontal,
  onChange,
  options,
  value,
  ...props
}: LFCPropsModel<RadioFieldPropsModel<TType>>): ReactElement<
  LFCPropsModel<RadioFieldPropsModel<TType>>
> => {
  const { wrapperProps } = useLayoutStyles({ props });
  const { valueControlled, valueControlledSet } = useControlledValue({
    defaultValue,
    onChange,
    value,
  });
  return (
    <Wrapper
      {...wrapperProps}
      alignSelf={FLEX_ALIGN.FLEX_START}
      border
      isRow={isHorizontal}
      p={THEME_SIZE.SMALL}
      round
      s={THEME_SIZE.SMALL}>
      {options.map(({ icon, id, label }) => {
        const isActive = id === valueControlled;
        return (
          <Button
            elementState={elementState ?? (isActive ? ELEMENT_STATE.ACTIVE : undefined)}
            icon={icon}
            key={id}
            onPress={() => valueControlledSet(id)}
            size={THEME_SIZE.SMALL}
            type={isActive ? BUTTON_TYPE.FILLED : BUTTON_TYPE.INVISIBLE}>
            {label}
          </Button>
        );
      })}
    </Wrapper>
  );
};
