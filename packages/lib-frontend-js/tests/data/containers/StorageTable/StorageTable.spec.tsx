import { StorageTable } from '@lib/frontend/data/containers/StorageTable/StorageTable';
import { type StorageTablePropsModel } from '@lib/frontend/data/containers/StorageTable/StorageTable.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<StorageTablePropsModel>({
  target: StorageTable,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
