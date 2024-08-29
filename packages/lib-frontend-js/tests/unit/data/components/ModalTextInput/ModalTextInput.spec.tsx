import { ModalTextInput } from '@lib/frontend/data/components/ModalTextInput/ModalTextInput';
import { type ModalTextInputPropsModel } from '@lib/frontend/data/components/ModalTextInput/ModalTextInput.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ModalTextInputPropsModel>({ target: ModalTextInput });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
