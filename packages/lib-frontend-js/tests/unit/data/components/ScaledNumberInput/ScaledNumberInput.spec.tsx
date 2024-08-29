import { ScaledNumberInput } from '@lib/frontend/data/components/ScaledNumberInput/ScaledNumberInput';
import { type ScaledNumberInputPropsModel } from '@lib/frontend/data/components/ScaledNumberInput/ScaledNumberInput.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ScaledNumberInputPropsModel>({ target: ScaledNumberInput });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
