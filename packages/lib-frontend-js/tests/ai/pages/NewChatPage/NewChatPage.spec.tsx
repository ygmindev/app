import { NewChatPage } from '@lib/frontend/ai/pages/NewChatPage/NewChatPage';
import { type NewChatPagePropsModel } from '@lib/frontend/ai/pages/NewChatPage/NewChatPage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<NewChatPagePropsModel>({
  target: NewChatPage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
