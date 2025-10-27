import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { _MarkdownView } from '@lib/frontend/documentation/components/MarkdownView/_MarkdownView';
import { type _MarkdownViewPropsModel } from '@lib/frontend/documentation/components/MarkdownView/_MarkdownView.models';
import { type MarkdownViewPropsModel } from '@lib/frontend/documentation/components/MarkdownView/MarkdownView.models';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';

export const MarkdownView = composeComponent<MarkdownViewPropsModel, _MarkdownViewPropsModel>({
  Component: _MarkdownView,
});

process.env.APP_IS_DEBUG && (MarkdownView.displayName = variableName({ MarkdownView }));
