import { PulsableWrapper } from '@lib/frontend/animation/components/PulsableWrapper/PulsableWrapper';
import { type PulsableWrapperPropsModel } from '@lib/frontend/animation/components/PulsableWrapper/PulsableWrapper.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<PulsableWrapperPropsModel>({ target: PulsableWrapper });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
