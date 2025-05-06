import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { LanguageInput } from '@lib/frontend/locale/components/LanguageInput/LanguageInput';
import { type LanguageInputPropsModel } from '@lib/frontend/locale/components/LanguageInput/LanguageInput.models';

export const props: LibraryPropsModel<LanguageInputPropsModel> = {
  Component: LanguageInput,
  defaultProps: {},
  variants: [],
};
