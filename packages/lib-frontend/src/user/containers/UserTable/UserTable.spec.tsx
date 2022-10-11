import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';
import { UserTable } from '@lib/frontend/user/containers/UserTable/UserTable';

const { Component, displayName, testID } = withTestComponent({ target: UserTable });

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
