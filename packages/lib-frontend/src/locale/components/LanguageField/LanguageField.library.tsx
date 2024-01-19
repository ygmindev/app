import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { LanguageField } from '@lib/frontend/locale/components/LanguageField/LanguageField';
import { type LanguageFieldPropsModel } from '@lib/frontend/locale/components/LanguageField/LanguageField.models';

export const props: LibraryPropsModel<LanguageFieldPropsModel> = {
  Component: LanguageField,
  defaultProps: {},
  variants: [],
};
