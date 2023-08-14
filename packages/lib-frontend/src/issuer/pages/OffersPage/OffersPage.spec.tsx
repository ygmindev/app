import { OffersPage } from '#lib-frontend/issuer/pages/OffersPage/OffersPage';
import { type OffersPagePropsModel } from '#lib-frontend/issuer/pages/OffersPage/OffersPage.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<OffersPagePropsModel>({
  target: OffersPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
