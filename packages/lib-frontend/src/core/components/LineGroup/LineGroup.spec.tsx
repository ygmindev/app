import { LineGroup } from '#lib-frontend/core/components/LineGroup/LineGroup';
import { type LineGroupPropsModel } from '#lib-frontend/core/components/LineGroup/LineGroup.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<LineGroupPropsModel>({
  target: LineGroup,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
