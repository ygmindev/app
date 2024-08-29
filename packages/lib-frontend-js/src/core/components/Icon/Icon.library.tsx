import { Icon } from '@lib/frontend/core/components/Icon/Icon';
import { ICONS } from '@lib/frontend/core/components/Icon/Icon.constants';
import { type IconPropsModel } from '@lib/frontend/core/components/Icon/Icon.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { THEME_COLOR, THEME_SIZE_MORE } from '@lib/frontend/style/style.constants';
import { cartesianObject } from '@lib/shared/core/utils/cartesianObject/cartesianObject';

export const props: LibraryPropsModel<IconPropsModel> = {
  Component: Icon,
  defaultProps: { icon: 'personCircle' },
  variants: [
    ...cartesianObject({ fontSize: Object.values(THEME_SIZE_MORE) }).map((props) => ({ props })),
    ...cartesianObject({ color: Object.values(THEME_COLOR) }).map((props) => ({ props })),
    ...cartesianObject({ icon: Object.keys(ICONS) }).map((props) => ({ props })),
  ],
};
