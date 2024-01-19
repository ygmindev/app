import { GlobalStyle } from '@lib/frontend/style/components/GlobalStyle/GlobalStyle';
import { type GlobalStylePropsModel } from '@lib/frontend/style/components/GlobalStyle/GlobalStyle.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<GlobalStylePropsModel>({
  target: GlobalStyle,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
