import { TextField } from '@lib-frontend/data/components/TextField/TextField';
import { type TextFieldPropsModel } from '@lib-frontend/data/components/TextField/TextField.models';
import { render } from '@lib-frontend/test/utils/render/render';
import { withTestComponent } from '@lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<TextFieldPropsModel>({
  defaultProps: {
    defaultValue: '',
  },
  target: TextField,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
