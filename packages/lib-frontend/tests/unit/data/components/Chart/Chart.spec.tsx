import { type ChartPropsModel } from '@lib/frontend/data/components/Chart/Chart.models';
import { Chart } from '@lib/frontend/data/components/Chart/Chart';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ChartPropsModel>({
  target: Chart,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
