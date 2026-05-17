import { NewChatPagePage } from '@lib/frontend/ai/pages/NewChatPagePage/NewChatPagePage';
import { type NewChatPagePagePropsModel } from '@lib/frontend/ai/pages/NewChatPagePage/NewChatPagePage.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<NewChatPagePagePropsModel>({
  target: NewChatPagePage,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
