import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';
import { PhoneField } from '#lib-frontend/user/components/PhoneField/PhoneField';
import { type PhoneFieldPropsModel } from '#lib-frontend/user/components/PhoneField/PhoneField.models';

const { Component, displayName, testID } = withTestComponent<PhoneFieldPropsModel>({
  target: PhoneField,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
