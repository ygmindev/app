import { Text } from '@lib/frontend/core/components/Text/Text';
import { TEXT_CASING } from '@lib/frontend/core/components/Text/Text.constants';
import { type TextPropsModel } from '@lib/frontend/core/components/Text/Text.models';
import { THEME_COLOR, THEME_ROLE, THEME_SIZE_MORE } from '@lib/frontend/style/style.constants';
import {
  FONT_ALIGN,
  FONT_STYLE,
} from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<TextPropsModel> = {
  Component: Text,
  defaultProps: {
    children: 'children',
    width: 150,
  },
  variants: [
    ...Object.values(THEME_SIZE_MORE).map((fontSize) => ({ props: { fontSize } })),
    ...Object.values(THEME_COLOR).map((color) => ({ props: { color } })),
    ...Object.values(THEME_COLOR)
      .map((color) =>
        Object.values(THEME_ROLE).map((colorRole) => ({ props: { color, colorRole } })),
      )
      .flat(),
    ...Object.values(FONT_ALIGN).map((align) => ({ props: { align } })),
    { props: { isBold: true } },
    { props: { children: 'ellipsis text that is too long', isEllipsis: true } },
    { props: { fontStyle: FONT_STYLE.HEADLINE } },
    { props: { fontStyle: FONT_STYLE.TITLE } },
    { props: { fontStyle: FONT_STYLE.SUBTITLE } },
    { props: { fontStyle: FONT_STYLE.BODY } },
    ...Object.values(TEXT_CASING).map((casing) => ({ props: { casing } })),
    { props: { isLineHeight: true } },
  ],
};
