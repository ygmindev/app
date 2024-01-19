import { Slides } from '@lib/frontend/animation/components/Slides/Slides';
import { type SlidesPropsModel } from '@lib/frontend/animation/components/Slides/Slides.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SlidesPropsModel>({ target: Slides });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
