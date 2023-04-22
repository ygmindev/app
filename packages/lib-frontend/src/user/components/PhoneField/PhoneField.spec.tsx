import type { PhoneFieldPropsModel } from '@lib/frontend/user/components/PhoneField/PhoneField.models';
import { PhoneField } from '@lib/frontend/user/components/PhoneField/PhoneField';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<PhoneFieldPropsModel>({
  target: PhoneField,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
