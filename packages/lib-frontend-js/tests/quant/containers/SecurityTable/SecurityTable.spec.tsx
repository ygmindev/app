import { SecurityTable } from '@lib/frontend/quant/containers/SecurityTable/SecurityTable';
import { type SecurityTablePropsModel } from '@lib/frontend/quant/containers/SecurityTable/SecurityTable.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SecurityTablePropsModel>({
  target: SecurityTable,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
