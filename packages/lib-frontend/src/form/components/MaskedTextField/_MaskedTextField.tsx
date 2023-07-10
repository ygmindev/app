import MaskInput, { createNumberMask, type MaskInputProps } from 'react-native-mask-input';

import { composeComponent } from '#lib-frontend/core/utils/composeComponent/composeComponent';
import { type _MaskedTextFieldPropsModel } from '#lib-frontend/form/components/MaskedTextField/_MaskedTextField.models';

export const _MaskedTextField = composeComponent<_MaskedTextFieldPropsModel, MaskInputProps>({
  Component: MaskInput,

  getProps: ({ mask, ...props }) => {
    const propsF: MaskInputProps = (() => {
      switch (mask) {
        case '$':
          return { mask: createNumberMask({ prefix: [mask], separator: ',' }) };
        default:
          return {
            mask: mask
              .split('')
              .map((value) => (/\d/.test(value) ? /\d/ : /\w/.test(value) ? /\w/ : value)),
          };
      }
    })();
    return { ...props, ...propsF };
  },
});
