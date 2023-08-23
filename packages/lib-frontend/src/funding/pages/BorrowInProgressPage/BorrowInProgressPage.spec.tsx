import { BorrowInProgressPage } from '#lib-frontend/funding/pages/BorrowInProgressPage/BorrowInProgressPage';
import { type BorrowInProgressPagePropsModel } from '#lib-frontend/funding/pages/BorrowInProgressPage/BorrowInProgressPage.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<BorrowInProgressPagePropsModel>({
  target: BorrowInProgressPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
