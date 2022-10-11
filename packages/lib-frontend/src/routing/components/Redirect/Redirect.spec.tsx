import { Redirect } from '@lib/frontend/routing/components/Redirect/Redirect';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const { Component, displayName } = withTestComponent({ target: Redirect });

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(1).toBe(1);
  });
});
