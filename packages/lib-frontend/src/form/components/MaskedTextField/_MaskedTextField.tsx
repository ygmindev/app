import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { _MaskedTextFieldPropsModel } from '@lib/frontend/form/components/MaskedTextField/_MaskedTextField.models';
import type { TextInputMaskProps } from 'react-native-masked-text';
import { TextInputMask } from 'react-native-masked-text';

const _getProps = (mask: string): TextInputMaskProps => {
  switch (mask) {
    case '$': {
      return { options: { delimiter: ',', precision: 0, unit: '$' }, type: 'money' };
    }
    default: {
      return {
        options: { mask: mask.replaceAll(/[a-zA-Z]/g, '*').replaceAll(/[0-9]/g, '9') },
        type: 'custom',
      };
    }
  }
};

export const _MaskedTextField = composeComponent<_MaskedTextFieldPropsModel, TextInputMaskProps>({
  getComponent: TextInputMask,
  getProps: ({ mask, ...props }) => ({ ...props, ..._getProps(mask) }),
});