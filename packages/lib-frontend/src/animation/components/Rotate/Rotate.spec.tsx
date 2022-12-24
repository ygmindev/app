import { Rotate } from '@lib/frontend/animation/components/Rotate/Rotate';
import type { RotatePropsModel } from '@lib/frontend/animation/components/Rotate/Rotate.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<RotatePropsModel>({ target: Rotate });

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
