import { ModalButton } from '@lib/frontend/core/components/ModalButton/ModalButton';
import type { ModalButtonPropsModel } from '@lib/frontend/core/components/ModalButton/ModalButton.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ModalButtonPropsModel>({ target: ModalButton });

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});