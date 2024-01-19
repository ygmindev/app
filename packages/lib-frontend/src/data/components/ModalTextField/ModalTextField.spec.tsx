import { ModalTextField } from '@lib/frontend/data/components/ModalTextField/ModalTextField';
import { type ModalTextFieldPropsModel } from '@lib/frontend/data/components/ModalTextField/ModalTextField.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ModalTextFieldPropsModel>({ target: ModalTextField });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
