import { Press } from '@lib/frontend/core/components/Press/Press';
import type { PressPropsModel } from '@lib/frontend/core/components/Press/Press.models';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<PressPropsModel>({ target: Press });

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
