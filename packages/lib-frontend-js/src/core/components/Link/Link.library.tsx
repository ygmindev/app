import { Link } from '@lib/frontend/core/components/Link/Link';
import { type LinkPropsModel } from '@lib/frontend/core/components/Link/Link.models';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<LinkPropsModel> = {
  Component: Link,
  defaultProps: {
    children: 'children',
  },
  variants: [
    { props: { children: <WrapperFixture /> } },
    { props: { isNewTab: true, pathname: 'https://www.google.com' } },
  ],
};
