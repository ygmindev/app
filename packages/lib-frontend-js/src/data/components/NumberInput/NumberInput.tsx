import { Button } from '@lib/frontend/core/components/Button/Button';
import { BUTTON_TYPE } from '@lib/frontend/core/components/Button/Button.constants';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type RLFCModel } from '@lib/frontend/core/core.models';
import { useElementStateControlled } from '@lib/frontend/core/hooks/useElementStateControlled/useElementStateControlled';
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
  addIcon = 'add',
  defaultValue,
  elementState,
  increment = 1,
  isTypable = true,
  keyboard,
  max,
  min,
  onChange,
  onElementStateChange,
  removeIcon = 'remove',
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
  const { elementStateControlled, elementStateControlledSet, isBlocked } =
    useElementStateControlled({
      elementState,
      onElementStateChange,
    });

  const handleChange = (v?: number | string): void => {
    let valueString = v ? toString(v) : undefined;
    let valueF;
    if (v !== '') {
      valueF = toNumber(v);
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
      elementState={elementStateControlled}
      isCenter
      isRightElementFixed={false}
      keyboard={keyboard ?? TEXT_INPUT_KEYBOARD.NUMBER}
      leftElement={
        <Button
          elementState={isBlocked ? ELEMENT_STATE.DISABLED : undefined}
          icon={removeIcon}
          onPress={() => handleChange((valueControlled ?? 0) - increment)}
          size={THEME_SIZE.SMALL}
          type={BUTTON_TYPE.INVISIBLE}
        />
      }
      onChange={isTypable ? handleChange : undefined}
      onElementStateChange={elementStateControlledSet}
      rightElement={
        <Button
          elementState={isBlocked ? ELEMENT_STATE.DISABLED : undefined}
          icon={addIcon}
          onPress={() => handleChange((valueControlled ?? 0) + increment)}
          size={THEME_SIZE.SMALL}
          type={BUTTON_TYPE.INVISIBLE}
        />
      }
      value={valueString}
    />
  );
};
