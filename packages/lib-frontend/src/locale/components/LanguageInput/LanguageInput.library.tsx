import { LanguageInput } from '@lib/frontend/locale/components/LanguageInput/LanguageInput';
import { type LanguageInputPropsModel } from '@lib/frontend/locale/components/LanguageInput/LanguageInput.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<LanguageInputPropsModel> = {
  Component: LanguageInput,
  defaultProps: {},
  variants: [],
};
