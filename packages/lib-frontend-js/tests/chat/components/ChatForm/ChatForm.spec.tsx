import { ChatForm } from '@lib/frontend/chat/components/ChatForm/ChatForm';
import { type ChatFormPropsModel } from '@lib/frontend/chat/components/ChatForm/ChatForm.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ChatFormPropsModel>({
  target: ChatForm,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
