import { NotFound } from '@lib/frontend/route/containers/NotFound/NotFound';
import type { NotFoundPropsModel } from '@lib/frontend/route/containers/NotFound/NotFound.models';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<NotFoundPropsModel>({
  target: NotFound,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
