import { RotatableIcon } from '#lib-frontend/core/components/RotatableIcon/RotatableIcon';
import { type RotatableIconPropsModel } from '#lib-frontend/core/components/RotatableIcon/RotatableIcon.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<RotatableIconPropsModel>({ target: RotatableIcon });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
