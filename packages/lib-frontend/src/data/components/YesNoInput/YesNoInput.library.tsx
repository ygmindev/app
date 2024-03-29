import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { YesNoInput } from '@lib-frontend/data/components/YesNoInput/YesNoInput';
import { type YesNoInputPropsModel } from '@lib-frontend/data/components/YesNoInput/YesNoInput.models';

export const props: LibraryPropsModel<YesNoInputPropsModel> = {
  Component: YesNoInput,
  defaultProps: {},
  variants: [],
};
