import { SpecificationTable } from '@lib/frontend/openapi/containers/SpecificationTable/SpecificationTable';
import { type SpecificationTablePropsModel } from '@lib/frontend/openapi/containers/SpecificationTable/SpecificationTable.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SpecificationTablePropsModel>({
  target: SpecificationTable,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
