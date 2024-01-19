import { Protectable } from '@lib/frontend/auth/components/Protectable/Protectable';
import { type ProtectablePropsModel } from '@lib/frontend/auth/components/Protectable/Protectable.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ProtectablePropsModel>({
  target: Protectable,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
