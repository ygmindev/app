import { Form } from '#lib-frontend/form/components/Form/Form';
import type { FormPropsModel } from '#lib-frontend/form/components/Form/Form.models';
import type { LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<FormPropsModel> = {
  Component: Form,
  defaultProps: {},
  variants: [],
};
