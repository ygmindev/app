import { PressableTitle } from '@lib/frontend/core/components/PressableTitle/PressableTitle';
import { type PressableTitlePropsModel } from '@lib/frontend/core/components/PressableTitle/PressableTitle.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<PressableTitlePropsModel> = {
  Component: PressableTitle,
  defaultProps: {},
  variants: [],
};
