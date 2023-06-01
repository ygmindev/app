import { RegisterPage } from '@lib/frontend/auth/pages/RegisterPage/RegisterPage';
import type { RegisterPagePropsModel } from '@lib/frontend/auth/pages/RegisterPage/RegisterPage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<RegisterPagePropsModel>({
  target: RegisterPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
