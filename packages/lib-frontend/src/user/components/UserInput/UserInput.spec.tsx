import { UserInput } from '@lib/frontend/user/components/UserInput/UserInput';
import { type UserInputPropsModel } from '@lib/frontend/user/components/UserInput/UserInput.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<UserInputPropsModel>({ target: UserInput });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
