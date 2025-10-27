import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { MarkdownDocumentation } from '@lib/frontend/documentation/components/MarkdownDocumentation/MarkdownDocumentation';
import { type MarkdownDocumentationPropsModel } from '@lib/frontend/documentation/components/MarkdownDocumentation/MarkdownDocumentation.models';

export const props: LibraryPropsModel<MarkdownDocumentationPropsModel> = {
  Component: MarkdownDocumentation,
  defaultProps: {},
  variants: [],
};
