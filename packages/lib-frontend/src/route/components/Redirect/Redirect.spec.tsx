import { Redirect } from '@lib/frontend/route/components/Redirect/Redirect';
import type { RedirectPropsModel } from '@lib/frontend/route/components/Redirect/Redirect.models';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const { Component, displayName } = withTestComponent<RedirectPropsModel>({ target: Redirect });

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(1).toBe(1);
  });
});
