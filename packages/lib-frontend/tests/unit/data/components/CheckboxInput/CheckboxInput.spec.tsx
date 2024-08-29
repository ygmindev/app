import { CheckboxInput } from '@lib/frontend/data/components/CheckboxInput/CheckboxInput';
import { type CheckboxInputPropsModel } from '@lib/frontend/data/components/CheckboxInput/CheckboxInput.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<CheckboxInputPropsModel>({ target: CheckboxInput });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
