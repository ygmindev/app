import { MarkdownView } from '@lib/frontend/documentation/components/MarkdownView/MarkdownView';
import { type MarkdownViewPropsModel } from '@lib/frontend/documentation/components/MarkdownView/MarkdownView.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<MarkdownViewPropsModel> = {
  Component: MarkdownView,
  defaultProps: {},
  variants: [],
};
