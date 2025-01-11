import { Divider } from '@lib/frontend/core/components/Divider/Divider';
import { type DividerPropsModel } from '@lib/frontend/core/components/Divider/Divider.models';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { THEME_COLOR_MORE } from '@lib/frontend/style/style.constants';

export const props: LibraryPropsModel<DividerPropsModel> = {
  Component: Divider,
  Renderer: ({ element }) => (
    <WrapperFixture backgroundColor={THEME_COLOR_MORE.SURFACE}>{element}</WrapperFixture>
  ),
  defaultProps: {},
  variants: [{ props: { children: 'children' } }],
};
