import { MessageContainer } from '@lib/frontend/chat/components/MessageContainer/MessageContainer';
import { type MessageContainerPropsModel } from '@lib/frontend/chat/components/MessageContainer/MessageContainer.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<MessageContainerPropsModel>({ target: MessageContainer });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
