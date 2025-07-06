import { type RSFCModel } from '@lib/frontend/core/core.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type _MaskedInputPropsModel } from '@lib/frontend/data/components/TextInput/_MaskedInput.models';
import { getTextInputParams } from '@lib/frontend/data/components/TextInput/_TextInput';
import { type TextInputRefModel } from '@lib/frontend/data/components/TextInput/TextInput.models';
import { type ViewStyleModel } from '@lib/frontend/style/style.models';
import { MaskedTextInput, type MaskedTextInputProps } from 'react-native-advanced-input-mask';

export const _MaskedInput = composeComponent<
  _MaskedInputPropsModel,
  MaskedTextInputProps,
  ViewStyleModel,
  TextInputRefModel
>({
  Component: MaskedTextInput as RSFCModel<TextInputRefModel, MaskedTextInputProps, ViewStyleModel>,

  getProps: ({ mask, ...props }, theme) => ({
    ...getTextInputParams().getProps?.({ ...props }, theme),
    mask: mask ?? '',
  }),

  stylers: [{ height: 32, width: '100%' }],
});
