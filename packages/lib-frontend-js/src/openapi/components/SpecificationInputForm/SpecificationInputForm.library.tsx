import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { SpecificationInputForm } from '@lib/frontend/openapi/components/SpecificationInputForm/SpecificationInputForm';
import { type SpecificationInputFormPropsModel } from '@lib/frontend/openapi/components/SpecificationInputForm/SpecificationInputForm.models';

export const props: LibraryPropsModel<SpecificationInputFormPropsModel<unknown>> = {
  Component: SpecificationInputForm,
  defaultProps: {
    specification: {
      fields: [],
      name: '',
    },
  },
  variants: [],
};
