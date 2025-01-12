import { Pressable } from '@lib/frontend/core/components/Pressable/Pressable';
import { type PressablePropsModel } from '@lib/frontend/core/components/Pressable/Pressable.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { cartesianObject } from '@lib/shared/core/utils/cartesianObject/cartesianObject';

export const props: LibraryPropsModel<PressablePropsModel> = {
  Component: Pressable,
  defaultProps: {
    children: <Text>children</Text>,
  },
  variants: [
    ...cartesianObject({
      elementState: Object.values(ELEMENT_STATE),
    }).map((props) => ({ props })),

    ...cartesianObject({
      confirmColor: Object.values(THEME_COLOR),
    }).map((props) => ({ props })),

    { props: { confirmMessage: 'confirmMessage' } },
  ],
};
