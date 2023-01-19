import { Modal } from '@lib/frontend/core/components/Modal/Modal';
import type { ModalPropsModel } from '@lib/frontend/core/components/Modal/Modal.models';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import { render } from '@lib/frontend/test/utils/render/render';
import { waitForExpect } from '@lib/frontend/test/utils/waitForExpect/waitForExpect';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const CHILDREN = 'CHILDREN';

const { Component, displayName } = withTestComponent<ModalPropsModel>({
  defaultProps: {
    children: <WrapperFixture text={CHILDREN} />,
    isOpen: false,
  },
  target: Modal,
});

describe(displayName, () => {
  test('is not open', async () => {
    const { queryByText } = render(<Component />);
    expect(queryByText(CHILDREN)).toBeFalsy();
  });

  test('is open', async () => {
    const { queryByText } = render(<Component isOpen />);
    await waitForExpect({ callback: () => expect(queryByText(CHILDREN)).toBeTruthy() });
  });
});
