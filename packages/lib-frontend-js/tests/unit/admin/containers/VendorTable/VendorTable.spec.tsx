import { VendorTable } from '@lib/frontend/admin/containers/VendorTable/VendorTable';
import { type VendorTablePropsModel } from '@lib/frontend/admin/containers/VendorTable/VendorTable.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<VendorTablePropsModel>({
  target: VendorTable,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
