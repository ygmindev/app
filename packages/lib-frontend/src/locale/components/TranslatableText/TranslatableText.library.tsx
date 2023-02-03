import { TranslatableText } from '@lib/frontend/locale/components/TranslatableText/TranslatableText';
import type { TranslatableTextPropsModel } from '@lib/frontend/locale/components/TranslatableText/TranslatableText.models';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<TranslatableTextPropsModel> = {
  Component: TranslatableText,
  defaultProps: {},
  variants: [],
};
