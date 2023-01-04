import type { GlobalStylePropsModel } from '@lib/frontend/style/containers/GlobalStyle/GlobalStyle.models';
import { GlobalStyle } from '@lib/frontend/style/containers/GlobalStyle/GlobalStyle';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<GlobalStylePropsModel>({
  target: GlobalStyle,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
