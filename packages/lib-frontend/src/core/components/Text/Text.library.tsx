import { Text } from '@lib/frontend/core/components/Text/Text';
import type { TextPropsModel } from '@lib/frontend/core/components/Text/Text.models';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/style/style.constants';
import {
  FONT_ALIGN,
  FONT_TYPE,
} from '@lib/frontend/style/utils/styler/fontStyler/fontStyler.constants';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<TextPropsModel> = {
  Component: Text,
  defaultProps: {
    children: 'text',
  },
  variants: [
    ...Object.values(THEME_SIZE).map((size) => ({ props: { size } })),
    ...Object.values(THEME_COLOR).map((color) => ({ props: { color } })),
    ...Object.values(FONT_ALIGN).map((align) => ({ align, props: { align } })),
    { props: { isBold: true } },
    { props: { type: FONT_TYPE.HEADLINE } },
    { props: { type: FONT_TYPE.TITLE } },
    { props: { type: FONT_TYPE.SUBTITLE } },
    { props: { type: FONT_TYPE.BODY } },
    { props: { isUppercase: true } },
    { props: { isCapitalize: true } },
    { props: { isLineHeight: true } },
  ],
};
