import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';
import { DealsPage } from '#lib-frontend/underwriter/pages/DealsPage/DealsPage';
import { type DealsPagePropsModel } from '#lib-frontend/underwriter/pages/DealsPage/DealsPage.models';

const { Component, displayName, testID } = withTestComponent<DealsPagePropsModel>({
  target: DealsPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
