import { Tooltip } from '@lib/frontend/core/components/Tooltip/Tooltip';
import { type TooltipPropsModel } from '@lib/frontend/core/components/Tooltip/Tooltip.models';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { type LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<TooltipPropsModel> = {
  Component: Tooltip,
  defaultProps: {
    children: 'tooltip',
  },
  variants: [
    { props: { icon: 'personCircle' } },
    { props: { children: <WrapperFixture /> } },
    ...Object.values(THEME_COLOR).map((color) => ({ props: { color } })),
  ],
};
