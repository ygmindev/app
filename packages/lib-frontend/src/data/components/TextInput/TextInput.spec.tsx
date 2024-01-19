import { TextInput } from '@lib/frontend/data/components/TextInput/TextInput';
import { type TextInputPropsModel } from '@lib/frontend/data/components/TextInput/TextInput.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<TextInputPropsModel>({
  defaultProps: {
    defaultValue: '',
  },
  target: TextInput,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
