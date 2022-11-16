import { Animation } from '@lib/frontend/animation/components/Animation/Animation';
import type { AnimationPropsModel } from '@lib/frontend/animation/components/Animation/Animation.models';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<AnimationPropsModel>({
  target: Animation,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
