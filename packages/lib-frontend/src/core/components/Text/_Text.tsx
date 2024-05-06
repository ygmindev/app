import isArray from 'lodash/isArray';
import lowerCase from 'lodash/lowerCase';
import upperCase from 'lodash/upperCase';
import { type TextProps } from 'react-native';
import { Text } from 'react-native';

import { type _TextPropsModel } from '@lib/frontend/core/components/Text/_Text.models';
import { TEXT_CASING } from '@lib/frontend/core/components/Text/Text.constants';
import { type TextCasingModel } from '@lib/frontend/core/components/Text/Text.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type ComposeComponentParamsModel } from '@lib/frontend/core/utils/composeComponent/composeComponent.models';
import { type TextStyleModel } from '@lib/frontend/style/style.models';

const capitalize = (text: string, casing?: TextCasingModel): string => {
  switch (casing) {
    case TEXT_CASING.CAPITALIZE: {
      return `${text[0].toUpperCase()}${text.substring(1)}`;
    }
    case TEXT_CASING.UPPERCASE: {
      return upperCase(text);
    }
    case TEXT_CASING.LOWERCASE: {
      return lowerCase(text);
    }
    default:
      return text;
  }
};

export const _textParams: ComposeComponentParamsModel<_TextPropsModel, TextProps, TextStyleModel> =
  {
    Component: Text,

    getProps: ({
      casing = TEXT_CASING.CAPITALIZE,
      children,
      isEllipsis,
      onPress,
    }: _TextPropsModel): TextProps => {
      isArray();
      return {
        children: isArray(children)
          ? children
          : children
            ? capitalize(children, casing)
            : undefined,
        ellipsizeMode: isEllipsis ? 'tail' : undefined,
        numberOfLines: isEllipsis ? 1 : undefined,
        onPress,
      };
    },
  };

export const _Text = composeComponent<_TextPropsModel, TextProps, TextStyleModel>(_textParams);
