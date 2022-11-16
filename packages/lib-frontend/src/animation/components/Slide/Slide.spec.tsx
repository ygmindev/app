import { Slide } from '@lib/frontend/animation/components/Slide/Slide';
import type { SlidePropsModel } from '@lib/frontend/animation/components/Slide/Slide.models';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SlidePropsModel>({ target: Slide });

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
