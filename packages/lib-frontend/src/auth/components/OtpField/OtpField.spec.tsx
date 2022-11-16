import { OtpField } from '@lib/frontend/auth/components/OtpField/OtpField';
import type { OtpFieldPropsModel } from '@lib/frontend/auth/components/OtpField/OtpField.models';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<OtpFieldPropsModel>({
  target: OtpField,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
