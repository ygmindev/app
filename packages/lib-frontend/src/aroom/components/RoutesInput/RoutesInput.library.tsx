import { RoutesInput } from '@lib/frontend/aroom/components/RoutesInput/RoutesInput';
import { type RoutesInputPropsModel } from '@lib/frontend/aroom/components/RoutesInput/RoutesInput.models';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<RoutesInputPropsModel> = {
  Component: RoutesInput,
  defaultProps: {},
  variants: [],
};
