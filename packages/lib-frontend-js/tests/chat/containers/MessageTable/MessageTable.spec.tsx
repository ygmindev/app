import { MessageTable } from '@lib/frontend/chat/containers/MessageTable/MessageTable';
import { type MessageTablePropsModel } from '@lib/frontend/chat/containers/MessageTable/MessageTable.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<MessageTablePropsModel>({
  target: MessageTable,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
