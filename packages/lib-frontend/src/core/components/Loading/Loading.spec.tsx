import { Loading } from '@lib/frontend/core/components/Loading/Loading';
import type { LoadingPropsModel } from '@lib/frontend/core/components/Loading/Loading.models';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<LoadingPropsModel>({
  target: Loading,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
