import { Link } from '@lib/frontend/core/components/Link/Link';
import type { LinkPropsModel } from '@lib/frontend/core/components/Link/Link.models';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<LinkPropsModel> = {
  Component: Link,
  defaultProps: {
    children: 'children',
  },
};
