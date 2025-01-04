import { TooltipIcon } from '@lib/frontend/core/components/TooltipIcon/TooltipIcon';
import { type TooltipIconPropsModel } from '@lib/frontend/core/components/TooltipIcon/TooltipIcon.models';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { THEME_COLOR } from '@lib/frontend/style/style.constants';
import { cartesianObject } from '@lib/shared/core/utils/cartesianObject/cartesianObject';

export const props: LibraryPropsModel<TooltipIconPropsModel> = {
  Component: TooltipIcon,
  defaultProps: {
    children: 'tooltip',
  },
  variants: [
    { props: { icon: 'personCircle' } },
    { props: { children: <WrapperFixture /> } },
    ...cartesianObject({ color: Object.values(THEME_COLOR) }).map((props) => ({ props })),
  ],
};
