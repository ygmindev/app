import { WebView } from '@lib/frontend/core/components/WebView/WebView';
import { type WebViewPropsModel } from '@lib/frontend/core/components/WebView/WebView.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';
import { APP_URI } from '@lib/shared/http/http.constants';

export const props: LibraryPropsModel<WebViewPropsModel> = {
  Component: WebView,
  defaultProps: {
    uri: APP_URI,
  },
  variants: [],
};
