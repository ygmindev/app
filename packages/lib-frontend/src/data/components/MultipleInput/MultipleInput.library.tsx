import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';
import { MultipleInput } from '@lib/frontend/data/components/MultipleInput/MultipleInput';
import { type MultipleInputPropsModel } from '@lib/frontend/data/components/MultipleInput/MultipleInput.models';

export const props: LibraryPropsModel<MultipleInputPropsModel> = {
  Component: MultipleInput,
  defaultProps: {},
  variants: [],
};
