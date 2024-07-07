import { ScratchPadPage } from '@lib/frontend/dev/pages/ScratchPadPage/ScratchPadPage';
import { type ScratchPadPagePropsModel } from '@lib/frontend/dev/pages/ScratchPadPage/ScratchPadPage.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<ScratchPadPagePropsModel> = {
  Component: ScratchPadPage,
  defaultProps: {},
  variants: [],
};
