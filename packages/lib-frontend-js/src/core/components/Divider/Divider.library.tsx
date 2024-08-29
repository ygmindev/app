import { Divider } from '@lib/frontend/core/components/Divider/Divider';
import { type DividerPropsModel } from '@lib/frontend/core/components/Divider/Divider.models';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import { THEME_COLOR_MORE } from '@lib/frontend/style/style.constants';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<DividerPropsModel> = {
  Component: Divider,
  Renderer: ({ ...props }) => (
    <WrapperFixture backgroundColor={THEME_COLOR_MORE.SURFACE}>
      <Divider {...props} />
    </WrapperFixture>
  ),
  defaultProps: {},
  variants: [{ props: { children: 'children' } }],
};
