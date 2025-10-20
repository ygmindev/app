import { DevProvider } from '@lib/frontend/dev/providers/DevProvider/DevProvider';
import { type DevProviderPropsModel } from '@lib/frontend/dev/providers/DevProvider/DevProvider.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<DevProviderPropsModel>({ target: DevProvider });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
