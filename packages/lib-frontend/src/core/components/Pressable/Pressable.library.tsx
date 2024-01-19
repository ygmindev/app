import { Pressable } from '@lib/frontend/core/components/Pressable/Pressable';
import { type PressablePropsModel } from '@lib/frontend/core/components/Pressable/Pressable.models';
import { Text } from '@lib/frontend/core/components/Text/Text';
import { ELEMENT_STATE } from '@lib/frontend/core/core.constants';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<PressablePropsModel> = {
  Component: Pressable,
  defaultProps: {
    children: <Text>children</Text>,
  },
  variants: [
    ...Object.values(ELEMENT_STATE).map((elementState) => ({ props: { elementState } })),
    { props: { confirmMessage: 'confirmMessage' } },
  ],
};
