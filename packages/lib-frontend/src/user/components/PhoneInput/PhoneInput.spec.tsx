import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';
import { PhoneInput } from '@lib/frontend/user/components/PhoneInput/PhoneInput';
import { type PhoneInputPropsModel } from '@lib/frontend/user/components/PhoneInput/PhoneInput.models';

const { Component, displayName, testID } = withTestComponent<PhoneInputPropsModel>({
  target: PhoneInput,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
