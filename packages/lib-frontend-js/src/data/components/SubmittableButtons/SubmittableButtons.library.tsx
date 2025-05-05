import { SubmittableButtons } from '@lib/frontend/data/components/SubmittableButtons/SubmittableButtons';
import { type SubmittableButtonsPropsModel } from '@lib/frontend/data/components/SubmittableButtons/SubmittableButtons.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<SubmittableButtonsPropsModel<unknown>> = {
  Component: SubmittableButtons,
  defaultProps: {
    onSubmit: async () => {},
  },
  variants: [],
};
