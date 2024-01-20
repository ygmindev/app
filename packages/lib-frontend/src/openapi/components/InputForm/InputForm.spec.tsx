import { InputForm } from '@lib-frontend/openapi/components/InputForm/InputForm';
import { type InputFormPropsModel } from '@lib-frontend/openapi/components/InputForm/InputForm.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<InputFormPropsModel>({ target: InputForm });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
