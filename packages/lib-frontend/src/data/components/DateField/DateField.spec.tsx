import { type DateFieldPropsModel } from '@lib-frontend/data/components/DateField/DateField.models';
import { DateField } from '@lib-frontend/data/components/DateField/DateField';
import { render } from '@lib-frontend/test/utils/render/render';
import { withTestComponent } from '@lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<DateFieldPropsModel>({
  target: DateField,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
