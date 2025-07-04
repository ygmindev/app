import { PhoneForm } from '@lib/frontend/user/components/PhoneForm/PhoneForm';
import { type PhoneFormPropsModel } from '@lib/frontend/user/components/PhoneForm/PhoneForm.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<PhoneFormPropsModel>({ target: PhoneForm });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
