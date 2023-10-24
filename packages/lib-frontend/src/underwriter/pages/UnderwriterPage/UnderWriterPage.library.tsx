import { UnderwriterPage } from '#lib-frontend/underwriter/pages/UnderwriterPage/UnderwriterPage';
import { type UnderwriterPagePropsModel } from '#lib-frontend/underwriter/pages/UnderwriterPage/UnderwriterPage.models';
import { type LibraryPropsModel } from '#lib-library/core/components/Library/Library.models';

export const props: LibraryPropsModel<UnderwriterPagePropsModel> = {
  Component: UnderwriterPage,
  defaultProps: {},
  variants: [],
};
