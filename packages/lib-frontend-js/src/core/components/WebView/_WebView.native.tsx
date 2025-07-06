import { type _WebViewPropsModel } from '@lib/frontend/core/components/WebView/_WebView.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type WebViewProps } from 'react-native-webview';
import { WebView } from 'react-native-webview';

export const _WebView = composeComponent<_WebViewPropsModel, WebViewProps>({
  Component: WebView,

  getProps: ({ uri }) => ({
    source: { uri },
  }),

  stylers: [{ flex: 1 }],
});
