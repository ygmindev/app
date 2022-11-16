import { TextField } from '@lib/frontend/form/components/TextField/TextField';
import type { TextFieldPropsModel } from '@lib/frontend/form/components/TextField/TextField.models';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<TextFieldPropsModel>({
  defaultProps: {
    defaultValue: '',
  },
  target: TextField,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
