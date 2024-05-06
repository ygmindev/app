import { FloatingFooter } from '@lib/frontend/app/components/FloatingFooter/FloatingFooter';
import { type FloatingFooterPropsModel } from '@lib/frontend/app/components/FloatingFooter/FloatingFooter.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<FloatingFooterPropsModel>({ target: FloatingFooter });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
