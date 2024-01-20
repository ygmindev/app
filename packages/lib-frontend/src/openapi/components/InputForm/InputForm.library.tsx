import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { InputForm } from '@lib-frontend/openapi/components/InputForm/InputForm';
import { type InputFormPropsModel } from '@lib-frontend/openapi/components/InputForm/InputForm.models';

export const props: LibraryPropsModel<InputFormPropsModel> = {
  Component: InputForm,
  defaultProps: {},
  variants: [],
};
