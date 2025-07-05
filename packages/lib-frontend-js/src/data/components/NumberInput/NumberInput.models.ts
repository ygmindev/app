import { type IconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import { type TEXT_INPUT_KEYBOARD } from '@lib/frontend/data/components/TextInput/TextInput.constants';
import { type TextInputPropsModel } from '@lib/frontend/data/components/TextInput/TextInput.models';
import { type InputPropsModel, type InputRefModel } from '@lib/frontend/data/data.models';

export type NumberInputPropsModel = InputPropsModel<number> &
  Omit<TextInputPropsModel, 'defaultValue' | 'keyboard' | 'onChange' | 'value'> & {
    addIcon?: IconPropsModel['icon'];
    increment?: number;
    isTypable?: boolean;
    keyboard?: TEXT_INPUT_KEYBOARD.NUMBER | TEXT_INPUT_KEYBOARD.DECIMAL;
    max?: number;
    min?: number;
    removeIcon?: IconPropsModel['icon'];
  };

export type NumberInputRefModel = InputRefModel<number>;
