import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import {
  type NumberInputPropsModel,
  type NumberInputRefModel,
} from '@lib/frontend/data/components/NumberInput/NumberInput.models';
import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { TEXT_INPUT_KEYBOARD } from '@lib/frontend/data/components/TextInput/TextInput.constants';
import { useValueControlled } from '@lib/frontend/data/hooks/useValueControlled/useValueControlled';
import { THEME_SIZE } from '@lib/frontend/style/style.constants';
import toNumber from 'lodash/toNumber';
import toString from 'lodash/toString';
import { forwardRef } from 'react';

export const NumberInput: RLFCModel<NumberInputRefModel, NumberInputPropsModel> = forwardRef(
  ({ defaultValue, keyboard, max, min, onChange, value, ...props }, ref) => {
    const { valueControlled, valueControlledSet } = useValueControlled({
      defaultValue,
      onChange,
      value,
    });

    const handleChange = (v?: number | string): void => {
      let valueF = v === undefined ? defaultValue : toNumber(v);
      if (valueF !== undefined) {
        if (max !== undefined && valueF > max) {
          valueF = max;
        }
        if (min !== undefined && valueF < min) {
          valueF = min;
        }
      }
      valueControlledSet(valueF);
    };

    return (
      <TextInput
        {...props}
        keyboard={keyboard ?? TEXT_INPUT_KEYBOARD.NUMBER}
        onChange={handleChange}
        ref={ref}
        rightElement={
          <Wrapper isRow>
            <Button
              icon="remove"
              onPress={() => handleChange((valueControlled ?? 0) - 1)}
              size={THEME_SIZE.SMALL}
              type={BUTTON_TYPE.INVISIBLE}
            />

            <Button
              icon="add"
              onPress={() => handleChange((valueControlled ?? 0) + 1)}
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
