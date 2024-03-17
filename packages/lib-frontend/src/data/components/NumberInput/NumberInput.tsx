import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import {
  type NumberInputPropsModel,
  type NumberInputRefModel,
} from '@lib/frontend/data/components/NumberInput/NumberInput.models';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import { isNumeric } from '@lib/shared/core/utils/isNumeric/isNumeric';
import toNumber from 'lodash/toNumber';
import toString from 'lodash/toString';
import { forwardRef } from 'react';

export const NumberInput: RLFCModel<NumberInputRefModel, NumberInputPropsModel> = forwardRef(
  ({ defaultValue, onChange, value, ...props }, ref) => {
    const { valueControlled, valueControlledSet } = useValueControlled({
      defaultValue,
      onChange,
      value,
    });

    return (
      <TextInput
        {...props}
        onChange={(v) => valueControlledSet(isNumeric(v) ? toNumber(v) : defaultValue)}
        ref={ref}
        rightElement={
          <Wrapper isRow>
            <Button
              icon="remove"
              onPress={() => valueControlledSet((valueControlled ?? 0) - 1)}
              size={THEME_SIZE.SMALL}
              type={BUTTON_TYPE.INVISIBLE}
            />

            <Button
              icon="add"
              onPress={() => valueControlledSet((valueControlled ?? 0) + 1)}
              size={THEME_SIZE.SMALL}
              type={BUTTON_TYPE.INVISIBLE}
            />
          </Wrapper>
        }
        value={toString(valueControlled)}
      />
    );
  },
);
