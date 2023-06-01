import { LogInPage } from '@lib/frontend/auth/pages/LogInPage/LogInPage';
import type { LogInPagePropsModel } from '@lib/frontend/auth/pages/LogInPage/LogInPage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<LogInPagePropsModel>({
  target: LogInPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
