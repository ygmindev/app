import { type TEXT_FIELD_KEYBOARD } from '@lib/frontend/data/components/TextField/TextField.constants';
import { type TextFieldPropsModel } from '@lib/frontend/data/components/TextField/TextField.models';
import { type FieldPropsModel, type FieldRefModel } from '@lib/frontend/data/data.models';

export type NumberFieldPropsModel = FieldPropsModel<number> &
  Omit<TextFieldPropsModel, 'defaultValue' | 'keyboard' | 'onChange' | 'value'> & {
    keyboard?:
      | TEXT_FIELD_KEYBOARD.NUMBER
      | TEXT_FIELD_KEYBOARD.NUMBER_POSITIVE
      | TEXT_FIELD_KEYBOARD.DECIMAL;
  };

export type NumberFieldRefModel = FieldRefModel<number>;
