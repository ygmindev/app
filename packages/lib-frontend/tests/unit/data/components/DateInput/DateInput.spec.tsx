import { DateInput } from '@lib/frontend/data/components/DateInput/DateInput';
import { type DateInputPropsModel } from '@lib/frontend/data/components/DateInput/DateInput.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<DateInputPropsModel>({ target: DateInput });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
