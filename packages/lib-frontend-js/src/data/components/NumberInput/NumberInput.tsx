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

export const NumberInput: RLFCModel<NumberInputRefModel, NumberInputPropsModel> = ({
  defaultValue,
  keyboard,
  max,
  min,
  onChange,
  value,
  ...props
}) => {
  const { valueControlled, valueControlledSet } = useValueControlled({
    defaultValue,
    onChange,
    value,
  });
  const { valueControlled: valueString, valueControlledSet: valueStringSet } = useValueControlled({
    defaultValue: defaultValue ? `${defaultValue}` : undefined,
  });

  const handleChange = (v?: number | string): void => {
    let valueString = v ? toString(v) : undefined;
    let valueF = v === undefined ? defaultValue : toNumber(v);
    if (valueF !== undefined) {
      if (max !== undefined && valueF > max) {
        valueF = max;
        valueString = toString(valueF);
      } else if (min !== undefined && valueF < min) {
        valueF = min;
        valueString = toString(valueF);
      }
    }
    valueStringSet(valueString);
    valueControlledSet(valueF);
  };

  return (
    <TextInput
      {...props}
      keyboard={keyboard ?? TEXT_INPUT_KEYBOARD.NUMBER}
      onChange={handleChange}
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
      value={valueString}
    />
  );
};
