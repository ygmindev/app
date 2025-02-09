import { type ChartContainerPropsModel } from '@lib/frontend/chart/ChartContainer/ChartContainer.models';
import { ChartContainer } from '@lib/frontend/chart/ChartContainer/ChartContainer';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ChartContainerPropsModel>({
  target: ChartContainer,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
