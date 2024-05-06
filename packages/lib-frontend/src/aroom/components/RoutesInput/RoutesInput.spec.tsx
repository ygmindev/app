import { RoutesInput } from '@lib/frontend/aroom/components/RoutesInput/RoutesInput';
import { type RoutesInputPropsModel } from '@lib/frontend/aroom/components/RoutesInput/RoutesInput.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<RoutesInputPropsModel>({
  target: RoutesInput,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
