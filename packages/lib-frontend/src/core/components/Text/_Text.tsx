import type { _TextPropsModel } from '@lib/frontend/core/components/Text/_Text.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import type { ComposeComponentParamsModel } from '@lib/frontend/core/utils/composeComponent/composeComponent.models';
import type { TextProps } from 'react-native';
import { Text } from 'react-native';

export const _textParams: ComposeComponentParamsModel<_TextPropsModel, TextProps> = {
  getComponent: () => Text,

  getProps: ({ children, isEllipsis, onPress }: _TextPropsModel): TextProps => ({
    children,
    ellipsizeMode: isEllipsis ? 'tail' : undefined,
    numberOfLines: isEllipsis ? 1 : undefined,
    onPress: onPress ? () => onPress() : undefined,
  }),
};

export const _Text = composeComponent<_TextPropsModel, TextProps>(_textParams);
