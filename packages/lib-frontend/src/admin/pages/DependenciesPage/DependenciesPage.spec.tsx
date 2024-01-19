import { DependenciesPage } from '@lib/frontend/admin/pages/DependenciesPage/DependenciesPage';
import { type DependenciesPagePropsModel } from '@lib/frontend/admin/pages/DependenciesPage/DependenciesPage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<DependenciesPagePropsModel>({
  target: DependenciesPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
