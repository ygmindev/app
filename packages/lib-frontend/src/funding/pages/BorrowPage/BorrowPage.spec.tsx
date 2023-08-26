import { BorrowPage } from '#lib-frontend/funding/pages/BorrowPage/BorrowPage';
import { type BorrowPagePropsModel } from '#lib-frontend/funding/pages/BorrowPage/BorrowPage.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<BorrowPagePropsModel>({
  target: BorrowPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
