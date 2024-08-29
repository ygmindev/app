import { ScrollBar } from '@lib/frontend/core/components/ScrollBar/ScrollBar';
import { type ScrollBarPropsModel } from '@lib/frontend/core/components/ScrollBar/ScrollBar.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ScrollBarPropsModel>({ target: ScrollBar });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
