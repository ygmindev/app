import { UnderwriterQuoteFormPage } from '#lib-frontend/underwriter/pages/UnderwriterQuoteFormPage/UnderwriterQuoteFormPage';
import { type UnderwriterQuoteFormPagePropsModel } from '#lib-frontend/underwriter/pages/UnderwriterQuoteFormPage/UnderwriterQuoteFormPage.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<UnderwriterQuoteFormPagePropsModel>({
  target: UnderwriterQuoteFormPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
