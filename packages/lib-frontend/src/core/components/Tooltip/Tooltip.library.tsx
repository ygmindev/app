import { Tooltip } from '@lib/frontend/core/components/Tooltip/Tooltip';
import type { TooltipPropsModel } from '@lib/frontend/core/components/Tooltip/Tooltip.models';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<TooltipPropsModel> = {
  Component: Tooltip,
  defaultProps: {},
  variants: [],
};
