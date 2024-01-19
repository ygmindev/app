import { TimezoneField } from '@lib/frontend/locale/components/TimezoneField/TimezoneField';
import { type TimezoneFieldPropsModel } from '@lib/frontend/locale/components/TimezoneField/TimezoneField.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<TimezoneFieldPropsModel>({
  target: TimezoneField,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
