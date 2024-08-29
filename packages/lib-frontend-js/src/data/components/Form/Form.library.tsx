import { Form } from '@lib/frontend/data/components/Form/Form';
import { type FormPropsModel } from '@lib/frontend/data/components/Form/Form.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<FormPropsModel> = {
  Component: Form,
  defaultProps: {},
  variants: [],
};
