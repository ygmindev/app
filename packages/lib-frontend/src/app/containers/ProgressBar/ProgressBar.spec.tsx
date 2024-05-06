import { ProgressBar } from '@lib/frontend/app/containers/ProgressBar/ProgressBar';
import { type ProgressBarPropsModel } from '@lib/frontend/app/containers/ProgressBar/ProgressBar.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ProgressBarPropsModel>({
  target: ProgressBar,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
