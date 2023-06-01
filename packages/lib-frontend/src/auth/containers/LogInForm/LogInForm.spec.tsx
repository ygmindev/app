import { LogInForm } from '@lib/frontend/auth/containers/LogInForm/LogInForm';
import type { LogInFormPropsModel } from '@lib/frontend/auth/containers/LogInForm/LogInForm.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<LogInFormPropsModel>({ target: LogInForm });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
