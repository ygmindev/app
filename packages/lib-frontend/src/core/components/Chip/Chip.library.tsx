import { Chip } from '@lib/frontend/core/components/Chip/Chip';
import { type ChipPropsModel } from '@lib/frontend/core/components/Chip/Chip.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { cartesianObject } from '@lib/shared/core/utils/cartesianObject/cartesianObject';

export const props: LibraryPropsModel<ChipPropsModel> = {
  Component: Chip,
  defaultProps: {
    children: 'children',
  },
  variants: [...cartesianObject({ color: Object.values(THEME_COLOR) }).map((props) => ({ props }))],
};
