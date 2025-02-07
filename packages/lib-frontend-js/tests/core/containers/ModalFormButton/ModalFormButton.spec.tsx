import { ModalFormButton } from '@lib/frontend/core/containers/ModalFormButton/ModalFormButton';
import { type ModalFormButtonPropsModel } from '@lib/frontend/core/containers/ModalFormButton/ModalFormButton.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ModalFormButtonPropsModel>({
  target: ModalFormButton,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
