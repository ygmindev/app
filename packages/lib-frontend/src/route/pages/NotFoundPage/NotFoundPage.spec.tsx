import { NotFoundPage } from '@lib/frontend/route/pages/NotFoundPage/NotFoundPage';
import type { NotFoundPagePropsModel } from '@lib/frontend/route/pages/NotFoundPage/NotFoundPage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<NotFoundPagePropsModel>({
  target: NotFoundPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
