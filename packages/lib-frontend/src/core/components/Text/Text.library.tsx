import { Text } from '#lib-frontend/core/components/Text/Text';
import type { TextPropsModel } from '#lib-frontend/core/components/Text/Text.models';
import { THEME_COLOR, THEME_ROLE, THEME_SIZE_MORE } from '#lib-frontend/style/style.constants';
import {
  FONT_ALIGN,
  FONT_CASING,
  FONT_TYPE,
} from '#lib-frontend/style/utils/styler/fontStyler/fontStyler.constants';
import type { LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<TextPropsModel> = {
  Component: Text,
  defaultProps: {
    children: 'children',
    width: 100,
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
    { props: { children: 'children too long', isEllipsis: true } },
    { props: { type: FONT_TYPE.HEADLINE } },
    { props: { type: FONT_TYPE.TITLE } },
    { props: { type: FONT_TYPE.SUBTITLE } },
    { props: { type: FONT_TYPE.BODY } },
    ...Object.values(FONT_CASING).map((casing) => ({ props: { casing } })),
    { props: { isLineHeight: true } },
  ],
};
