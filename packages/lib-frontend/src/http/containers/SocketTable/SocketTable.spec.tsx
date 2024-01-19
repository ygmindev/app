import { SocketTable } from '@lib/frontend/http/containers/SocketTable/SocketTable';
import { type SocketTablePropsModel } from '@lib/frontend/http/containers/SocketTable/SocketTable.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SocketTablePropsModel>({
  target: SocketTable,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
