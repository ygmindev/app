import { type WebViewPropsModel } from '@lib/frontend/core/components/WebView/WebView.models';
import { WebView } from '@lib/frontend/core/components/WebView/WebView';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<WebViewPropsModel>({
  target: WebView,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
