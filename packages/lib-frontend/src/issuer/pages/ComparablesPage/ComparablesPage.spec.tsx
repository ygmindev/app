import { ComparablesPage } from '#lib-frontend/issuer/pages/ComparablesPage/ComparablesPage';
import { type ComparablesPagePropsModel } from '#lib-frontend/issuer/pages/ComparablesPage/ComparablesPage.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ComparablesPagePropsModel>({
  target: ComparablesPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
