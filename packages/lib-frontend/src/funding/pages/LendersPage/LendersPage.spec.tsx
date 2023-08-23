import { LendersPage } from '#lib-frontend/funding/pages/LendersPage/LendersPage';
import { type LendersPagePropsModel } from '#lib-frontend/funding/pages/LendersPage/LendersPage.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<LendersPagePropsModel>({
  target: LendersPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
