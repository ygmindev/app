import { type LineChartPropsModel } from '@lib/frontend/chart/components/LineChart/LineChart.models';
import { LineChart } from '@lib/frontend/chart/components/LineChart/LineChart';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<LineChartPropsModel>({
  target: LineChart,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
