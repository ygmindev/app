import { type _WebViewPropsModel } from '@lib/frontend/core/components/WebView/_WebView.models';
import { composeComponent } from '@lib/frontend/core/utils/composeComponent/composeComponent';
import { type IframeHTMLAttributes } from 'react';

export const _WebView = composeComponent<
  _WebViewPropsModel,
  IframeHTMLAttributes<HTMLIFrameElement>
>({
  Component: 'iframe',

  getProps: ({ uri }) => ({
    sandbox: 'allow-same-origin allow-scripts',
    src: uri,
  }),

  isWeb: true,

  stylers: [{ borderWidth: 0, flex: 1 }],
});
