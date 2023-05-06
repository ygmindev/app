import { SwitchField } from '@lib/frontend/form/components/SwitchField/SwitchField';
import type { SwitchFieldPropsModel } from '@lib/frontend/form/components/SwitchField/SwitchField.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SwitchFieldPropsModel>({
  target: SwitchField,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
