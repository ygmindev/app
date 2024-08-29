import { PortalHost } from '@lib/frontend/core/components/PortalHost/PortalHost';
import { type PortalHostPropsModel } from '@lib/frontend/core/components/PortalHost/PortalHost.models';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import { render } from '@lib/frontend/test/utils/render/render';
import { waitForExpect } from '@lib/frontend/test/utils/waitForExpect/waitForExpect';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const CHILDREN = 'CHILDREN';

const { Component, displayName } = withTestComponent<PortalHostPropsModel>({
  defaultProps: {
    children: <WrapperFixture>{CHILDREN}</WrapperFixture>,
  },
  target: PortalHost,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByText } = await render({ element: <Component /> });
    await waitForExpect(async () => expect(await findByText(CHILDREN)).toBeTruthy());
  });
});
