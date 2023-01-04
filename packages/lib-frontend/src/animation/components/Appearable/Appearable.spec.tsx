import { Appearable } from '@lib/frontend/animation/components/Appearable/Appearable';
import type { AppearablePropsModel } from '@lib/frontend/animation/components/Appearable/Appearable.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<AppearablePropsModel>({ target: Appearable });

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});