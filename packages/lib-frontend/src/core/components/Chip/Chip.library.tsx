import { Chip } from '@lib/frontend/core/components/Chip/Chip';
import { type ChipPropsModel } from '@lib/frontend/core/components/Chip/Chip.models';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<ChipPropsModel> = {
  Component: Chip,
  defaultProps: {
    children: 'children',
  },
  variants: [...Object.values(THEME_COLOR).map((color) => ({ props: { color } }))],
};
