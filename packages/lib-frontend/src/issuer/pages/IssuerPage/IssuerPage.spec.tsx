import { IssuerPage } from '#lib-frontend/issuer/pages/IssuerPage/IssuerPage';
import { type IssuerPagePropsModel } from '#lib-frontend/issuer/pages/IssuerPage/IssuerPage.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<IssuerPagePropsModel>({
  target: IssuerPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
