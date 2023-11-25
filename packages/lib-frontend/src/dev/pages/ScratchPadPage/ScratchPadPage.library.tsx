import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';
import { ScratchPadPage } from '#lib-frontend/dev/pages/ScratchPadPage/ScratchPadPage';
import { type ScratchPadPagePropsModel } from '#lib-frontend/dev/pages/ScratchPadPage/ScratchPadPage.models';

export const props: LibraryPropsModel<ScratchPadPagePropsModel> = {
  defaultProps: {},
  Component: ScratchPadPage,
  variants: [],
};
