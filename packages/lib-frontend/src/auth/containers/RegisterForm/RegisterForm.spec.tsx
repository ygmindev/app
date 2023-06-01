import { RegisterForm } from '@lib/frontend/auth/containers/RegisterForm/RegisterForm';
import type { RegisterFormPropsModel } from '@lib/frontend/auth/containers/RegisterForm/RegisterForm.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<RegisterFormPropsModel>({ target: RegisterForm });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
