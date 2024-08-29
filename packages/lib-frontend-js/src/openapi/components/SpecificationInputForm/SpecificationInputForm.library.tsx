import { SpecificationInputForm } from '@lib/frontend/openapi/components/SpecificationInputForm/SpecificationInputForm';
import { type SpecificationInputFormPropsModel } from '@lib/frontend/openapi/components/SpecificationInputForm/SpecificationInputForm.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<SpecificationInputFormPropsModel> = {
  Component: SpecificationInputForm,
  defaultProps: {},
  variants: [],
};
