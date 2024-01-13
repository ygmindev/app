import { AddressField } from '@lib-frontend/map/components/AddressField/AddressField';
import { type AddressFieldPropsModel } from '@lib-frontend/map/components/AddressField/AddressField.models';
import { render } from '@lib-frontend/test/utils/render/render';
import { withTestComponent } from '@lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<AddressFieldPropsModel>({ target: AddressField });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
