import { DependencyTable } from '#lib-frontend/admin/containers/DependencyTable/DependencyTable';
import { type DependencyTablePropsModel } from '#lib-frontend/admin/containers/DependencyTable/DependencyTable.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<DependencyTablePropsModel>({
  target: DependencyTable,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
