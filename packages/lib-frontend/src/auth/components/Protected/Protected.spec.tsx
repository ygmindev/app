import { Protected } from '@lib/frontend/auth/components/Protected/Protected';
import type { ProtectedPropsModel } from '@lib/frontend/auth/components/Protected/Protected.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ProtectedPropsModel>({ target: Protected });

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
