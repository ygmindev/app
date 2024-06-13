import { AccessTable } from '@lib/frontend/auth/containers/AccessTable/AccessTable';
import { type AccessTablePropsModel } from '@lib/frontend/auth/containers/AccessTable/AccessTable.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<AccessTablePropsModel>({
  target: AccessTable,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
