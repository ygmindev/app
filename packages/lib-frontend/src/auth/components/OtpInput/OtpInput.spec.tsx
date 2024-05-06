import { OtpInput } from '@lib/frontend/auth/components/OtpInput/OtpInput';
import { type OtpInputPropsModel } from '@lib/frontend/auth/components/OtpInput/OtpInput.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<OtpInputPropsModel>({
  target: OtpInput,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
