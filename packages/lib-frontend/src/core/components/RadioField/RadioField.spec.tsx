import type { RadioFieldPropsModel } from '@lib/frontend/core/components/RadioField/RadioField.models';
import { RadioField } from '@lib/frontend/core/components/RadioField/RadioField';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<RadioFieldPropsModel>({
  target: RadioField,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
