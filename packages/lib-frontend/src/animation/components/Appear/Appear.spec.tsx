import { Appear } from '@lib/frontend/animation/components/Appear/Appear';
import type { AppearPropsModel } from '@lib/frontend/animation/components/Appear/Appear.models';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<AppearPropsModel>({ target: Appear });

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
