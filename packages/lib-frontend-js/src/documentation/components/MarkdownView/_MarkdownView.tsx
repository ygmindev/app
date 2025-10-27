import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type _MarkdownViewPropsModel } from '@lib/frontend/documentation/components/MarkdownView/_MarkdownView.models';
import Markdown, { type Options } from 'react-markdown';

export const _MarkdownView = composeComponent<_MarkdownViewPropsModel, Options>({
  Component: Markdown,

  getProps: ({ children }) => ({
    children,
  }),
});
