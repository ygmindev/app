import { ChatHistoryPage } from '@lib/frontend/ai/pages/ChatHistoryPage/ChatHistoryPage';
import { type ChatHistoryPagePropsModel } from '@lib/frontend/ai/pages/ChatHistoryPage/ChatHistoryPage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ChatHistoryPagePropsModel>({
  target: ChatHistoryPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
