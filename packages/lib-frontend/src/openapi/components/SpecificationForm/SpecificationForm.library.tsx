import { SpecificationForm } from '@lib/frontend/openapi/components/SpecificationForm/SpecificationForm';
import { type SpecificationFormPropsModel } from '@lib/frontend/openapi/components/SpecificationForm/SpecificationForm.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<SpecificationFormPropsModel> = {
  Component: SpecificationForm,
  defaultProps: {},
  variants: [],
};
