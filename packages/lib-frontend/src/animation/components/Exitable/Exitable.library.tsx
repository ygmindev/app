import { Exitable } from '@lib/frontend/animation/components/Exitable/Exitable';
import { type ExitablePropsModel } from '@lib/frontend/animation/components/Exitable/Exitable.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<ExitablePropsModel> = {
  Component: Exitable,
  defaultProps: {},
  variants: [],
};
