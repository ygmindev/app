import { QuotesPage } from '#lib-frontend/funding/pages/QuotesPage/QuotesPage';
import { type QuotesPagePropsModel } from '#lib-frontend/funding/pages/QuotesPage/QuotesPage.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<QuotesPagePropsModel>({
  target: QuotesPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
