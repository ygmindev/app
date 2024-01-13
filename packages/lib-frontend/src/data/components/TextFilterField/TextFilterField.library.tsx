import { TextFilterField } from '@lib-frontend/data/components/TextFilterField/TextFilterField';
import { type TextFilterFieldPropsModel } from '@lib-frontend/data/components/TextFilterField/TextFilterField.models';
import { type LibraryPropsModel } from '@lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<TextFilterFieldPropsModel> = {
  Component: TextFilterField,
  defaultProps: {},
  variants: [],
};
