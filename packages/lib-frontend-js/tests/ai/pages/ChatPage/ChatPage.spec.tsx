import { ChatPage } from '@lib/frontend/ai/pages/ChatPage/ChatPage';
import { type ChatPagePropsModel } from '@lib/frontend/ai/pages/ChatPage/ChatPage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ChatPagePropsModel>({
  target: ChatPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
