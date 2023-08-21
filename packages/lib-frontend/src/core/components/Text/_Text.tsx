import capitalize from 'lodash/capitalize';
import lowerCase from 'lodash/lowerCase';
import upperCase from 'lodash/upperCase';
import { type TextProps } from 'react-native';
import { Text } from 'react-native';

import { type _TextPropsModel } from '#lib-frontend/core/components/Text/_Text.models';
import { TEXT_CASING } from '#lib-frontend/core/components/Text/Text.constants';
import { composeComponent } from '#lib-frontend/core/utils/composeComponent/composeComponent';
import { type ComposeComponentParamsModel } from '#lib-frontend/core/utils/composeComponent/composeComponent.models';
import { type TextStyleModel } from '#lib-frontend/style/style.models';

export const _textParams: ComposeComponentParamsModel<_TextPropsModel, TextProps, TextStyleModel> =
  {
    Component: Text,

    getProps: ({
      casing = TEXT_CASING.CAPITALIZE,
      children,
      isEllipsis,
      onPress,
    }: _TextPropsModel): TextProps => {
      let childrenF = children;
      if (childrenF) {
        switch (casing) {
          case TEXT_CASING.CAPITALIZE: {
            childrenF = capitalize(childrenF);
            break;
          }
          case TEXT_CASING.UPPERCASE: {
            childrenF = upperCase(childrenF);
            break;
          }
          case TEXT_CASING.LOWERCASE: {
            childrenF = lowerCase(childrenF);
            break;
          }
        }
      }
      return {
        children: childrenF,
        ellipsizeMode: isEllipsis ? 'tail' : undefined,
        numberOfLines: isEllipsis ? 1 : undefined,
        onPress,
      };
    },
  };

export const _Text = composeComponent<_TextPropsModel, TextProps, TextStyleModel>(_textParams);
