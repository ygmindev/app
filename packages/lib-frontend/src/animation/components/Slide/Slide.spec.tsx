import { Slide } from '@lib/frontend/animation/components/Slide/Slide';
import { type SlidePropsModel } from '@lib/frontend/animation/components/Slide/Slide.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SlidePropsModel>({ target: Slide });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
