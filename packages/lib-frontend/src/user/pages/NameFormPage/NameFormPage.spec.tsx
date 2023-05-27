import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';
import { NameFormPage } from '@lib/frontend/user/pages/NameFormPage/NameFormPage';
import type { NameFormPropsModel } from '@lib/frontend/user/pages/NameFormPage/NameFormPage.models';

const { Component, displayName, testID } = withTestComponent<NameFormPropsModel>({
  target: NameFormPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
