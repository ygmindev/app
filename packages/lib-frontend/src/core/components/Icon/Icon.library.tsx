import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import type { IconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import { THEME_COLOR, THEME_SIZE } from '@lib/frontend/style/style.constants';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<IconPropsModel> = {
  Component: Icon,
  defaultProps: { icon: 'person' },
  variants: [
    ...Object.values(THEME_SIZE).map((fontSize) => ({ props: { fontSize } })),
    ...Object.values(THEME_COLOR).map((color) => ({ props: { color } })),
  ],
};