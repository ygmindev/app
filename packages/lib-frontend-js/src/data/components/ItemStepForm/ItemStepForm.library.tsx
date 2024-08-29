import { ItemStepForm } from '@lib/frontend/data/components/ItemStepForm/ItemStepForm';
import { type ItemStepFormPropsModel } from '@lib/frontend/data/components/ItemStepForm/ItemStepForm.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<ItemStepFormPropsModel> = {
  Component: ItemStepForm,
  defaultProps: {},
  variants: [],
};
