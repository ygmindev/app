import { type ContainerProviderPropsModel } from '@lib/frontend/core/containers/ContainerProvider/ContainerProvider.models';
import { ContainerProvider } from '@lib/frontend/core/containers/ContainerProvider/ContainerProvider';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ContainerProviderPropsModel>({
  target: ContainerProvider,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
