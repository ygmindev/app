import { SessionTable } from '#lib-frontend/chat/containers/SessionTable/SessionTable';
import { type SessionTablePropsModel } from '#lib-frontend/chat/containers/SessionTable/SessionTable.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SessionTablePropsModel>({
  target: SessionTable,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
