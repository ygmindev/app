import { OtpField } from '@lib/frontend/auth/components/OtpField/OtpField';
import { type OtpFieldPropsModel } from '@lib/frontend/auth/components/OtpField/OtpField.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<OtpFieldPropsModel>({
  target: OtpField,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
