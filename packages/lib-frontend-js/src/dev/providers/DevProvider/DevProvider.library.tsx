import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { DevProvider } from '@lib/frontend/dev/providers/DevProvider/DevProvider';
import { type DevProviderPropsModel } from '@lib/frontend/dev/providers/DevProvider/DevProvider.models';

export const props: LibraryPropsModel<DevProviderPropsModel> = {
  Component: DevProvider,
  defaultProps: {},
  variants: [],
};
