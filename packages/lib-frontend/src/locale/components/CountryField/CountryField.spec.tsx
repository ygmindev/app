import { CountryField } from '#lib-frontend/locale/components/CountryField/CountryField';
import { type CountryFieldPropsModel } from '#lib-frontend/locale/components/CountryField/CountryField.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<CountryFieldPropsModel>({
  target: CountryField,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
