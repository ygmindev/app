import { _WebView } from '@lib/frontend/core/components/WebView/_WebView';
import { type _WebViewPropsModel } from '@lib/frontend/core/components/WebView/_WebView.models';
import { type WebViewPropsModel } from '@lib/frontend/core/components/WebView/WebView.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { variableName } from '@lib/shared/core/utils/variableName/variableName';

export const WebView = composeComponent<WebViewPropsModel, _WebViewPropsModel>({
  Component: _WebView,
});

process.env.APP_IS_DEBUG && (WebView.displayName = variableName({ WebView }));
