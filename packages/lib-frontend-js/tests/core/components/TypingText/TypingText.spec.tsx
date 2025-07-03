import { type TypingTextPropsModel } from '@lib/frontend/core/components/TypingText/TypingText.models';
import { TypingText } from '@lib/frontend/core/components/TypingText/TypingText';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<TypingTextPropsModel>({
  target: TypingText,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
