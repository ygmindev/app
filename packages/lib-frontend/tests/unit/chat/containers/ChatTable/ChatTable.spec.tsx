import { ChatTable } from '@lib/frontend/chat/containers/ChatTable/ChatTable';
import { type ChatTablePropsModel } from '@lib/frontend/chat/containers/ChatTable/ChatTable.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ChatTablePropsModel>({
  target: ChatTable,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
