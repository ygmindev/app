import { type CalendarInputPropsModel } from '@lib/frontend/data/components/CalendarInput/CalendarInput.models';
import { CalendarInput } from '@lib/frontend/data/components/CalendarInput/CalendarInput';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<CalendarInputPropsModel>({
  target: CalendarInput,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
