import { UsernameUpdate } from '@lib/frontend/auth/containers/UsernameUpdate/UsernameUpdate';
import type { UsernameUpdatePropsModel } from '@lib/frontend/auth/containers/UsernameUpdate/UsernameUpdate.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<UsernameUpdatePropsModel>({
  target: UsernameUpdate,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
