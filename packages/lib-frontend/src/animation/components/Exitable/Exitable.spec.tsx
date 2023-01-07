import { Exitable } from '@lib/frontend/animation/components/Exitable/Exitable';
import type { ExitablePropsModel } from '@lib/frontend/animation/components/Exitable/Exitable.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ExitablePropsModel>({
  target: Exitable,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
