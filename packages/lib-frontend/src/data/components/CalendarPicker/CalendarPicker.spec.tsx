import { type CalendarPickerPropsModel } from '@lib/frontend/data/components/CalendarPicker/CalendarPicker.models';
import { CalendarPicker } from '@lib/frontend/data/components/CalendarPicker/CalendarPicker';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<CalendarPickerPropsModel>({
  target: CalendarPicker,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
