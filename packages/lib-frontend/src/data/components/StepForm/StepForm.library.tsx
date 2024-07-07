import { StepForm } from '@lib/frontend/data/components/StepForm/StepForm';
import { type StepFormPropsModel } from '@lib/frontend/data/components/StepForm/StepForm.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<StepFormPropsModel> = {
  Component: StepForm,
  defaultProps: {},
  variants: [],
};
