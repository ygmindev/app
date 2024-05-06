import { type SliderPropsModel } from '@lib/frontend/core/components/Slider/Slider.models';
import { Slider } from '@lib/frontend/core/components/Slider/Slider';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SliderPropsModel>({
  target: Slider,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
