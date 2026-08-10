import { PreviewList } from '@lib/frontend/core/components/PreviewList/PreviewList';
import { type PreviewListPropsModel } from '@lib/frontend/core/components/PreviewList/PreviewList.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<PreviewListPropsModel> = {
  Component: PreviewList,
  defaultProps: {},
  variants: [],
};
