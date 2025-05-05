import { MultipleInput } from '@lib/frontend/data/components/MultipleInput/MultipleInput';
import { type MultipleInputPropsModel } from '@lib/frontend/data/components/MultipleInput/MultipleInput.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { type WithIdModel } from '@lib/shared/core/utils/withId/withId.models';

export const props: LibraryPropsModel<MultipleInputPropsModel<WithIdModel>> = {
  Component: MultipleInput,
  defaultProps: {
    options: [],
  },
  variants: [],
};
