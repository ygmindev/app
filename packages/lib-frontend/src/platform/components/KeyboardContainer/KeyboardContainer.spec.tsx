import { KeyboardContainer } from '@lib/frontend/platform/components/KeyboardContainer/KeyboardContainer';
import type { KeyboardContainerPropsModel } from '@lib/frontend/platform/components/KeyboardContainer/KeyboardContainer.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<KeyboardContainerPropsModel>({
  target: KeyboardContainer,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
