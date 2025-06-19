import { Text } from '@lib/frontend/core/components/Text/Text';
import { TEXT_CASING } from '@lib/frontend/core/components/Text/Text.constants';
import { type TextPropsModel } from '@lib/frontend/core/components/Text/Text.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { THEME_COLOR, THEME_ROLE, THEME_SIZE_MORE } from '@lib/frontend/style/style.constants';
import {
  FONT_ALIGN,
  FONT_STYLE,
} from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { cartesianObject } from '@lib/shared/core/utils/cartesianObject/cartesianObject';

export const props: LibraryPropsModel<TextPropsModel> = {
  Component: Text,
  defaultProps: {
    children: 'children',
    width: 150,
  },
  variants: [
    ...cartesianObject({ fontSize: Object.values(THEME_SIZE_MORE) }).map((props) => ({ props })),
    ...cartesianObject({
      color: Object.values(THEME_COLOR),
      colorRole: Object.values(THEME_ROLE),
    }).map((props) => ({ props })),
    ...cartesianObject({ align: Object.values(FONT_ALIGN) }).map((props) => ({ props })),
    ...cartesianObject({ casing: Object.values(TEXT_CASING) }).map((props) => ({ props })),
    { props: { isBold: true } },
    { props: { children: 'ellipsis text that is too long', isEllipsis: true } },
    ...cartesianObject({ fontStyle: Object.values(FONT_STYLE) }).map((props) => ({ props })),
    { props: { isLineHeight: true } },
  ],
};
