import { ProgressBar } from '@lib/frontend/app/containers/ProgressBar/ProgressBar';
import { type ProgressBarPropsModel } from '@lib/frontend/app/containers/ProgressBar/ProgressBar.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<ProgressBarPropsModel> = {
  Component: ProgressBar,
  defaultProps: {},
  variants: [],
};
