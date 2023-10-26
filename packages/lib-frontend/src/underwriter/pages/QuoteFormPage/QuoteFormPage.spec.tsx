import { QuoteFormPage } from '#lib-frontend/underwriter/pages/QuoteFormPage/QuoteFormPage';
import { type QuoteFormPagePropsModel } from '#lib-frontend/underwriter/pages/QuoteFormPage/QuoteFormPage.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<QuoteFormPagePropsModel>({
  target: QuoteFormPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
