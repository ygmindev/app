import { type RSFCModel } from '@lib/frontend/core/core.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type _MaskedInputPropsModel } from '@lib/frontend/data/components/TextInput/_MaskedInput.models';
import { getTextInputParams } from '@lib/frontend/data/components/TextInput/_TextInput';
import { type TextInputRefModel } from '@lib/frontend/data/components/TextInput/TextInput.models';
import { THEME_COLOR_MORE, THEME_ROLE } from '@lib/frontend/style/style.constants';
import { type ViewStyleModel } from '@lib/frontend/style/style.models';
import { textStyler } from '@lib/frontend/style/utils/styler/textStyler/textStyler';
import { MaskedTextInput, type MaskedTextInputProps } from 'react-native-advanced-input-mask';

export const _MaskedInput = composeComponent<
  _MaskedInputPropsModel,
  MaskedTextInputProps,
  ViewStyleModel,
  TextInputRefModel
>({
  Component: MaskedTextInput as RSFCModel<TextInputRefModel, MaskedTextInputProps, ViewStyleModel>,

  getProps: ({ mask, ...props }, theme) => {
    const color = theme.color.palette[THEME_COLOR_MORE.SURFACE][THEME_ROLE.MAIN];
    return {
      ...getTextInputParams().getProps?.({ ...props }, theme),
      cursorColor: color,
      mask: mask ?? '',
      placeholderTextColor: color,
      selectionColor: color,
      selectionHandleColor: color,
    };
  },

  stylers: [{ height: 32, width: '100%' }, textStyler],
});
