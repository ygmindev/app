import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { SubmittableButtons } from '#lib-frontend/data/components/SubmittableButtons/SubmittableButtons';
import { type SubmittableButtonsPropsModel } from '#lib-frontend/data/components/SubmittableButtons/SubmittableButtons.models';

export const props: LibraryPropsModel<SubmittableButtonsPropsModel> = {
  Component: SubmittableButtons,
  defaultProps: {},
  variants: [],
};
