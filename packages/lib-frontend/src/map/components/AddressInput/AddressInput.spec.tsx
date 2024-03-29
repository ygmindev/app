import { AddressInput } from '@lib/frontend/map/components/AddressInput/AddressInput';
import { type AddressInputPropsModel } from '@lib/frontend/map/components/AddressInput/AddressInput.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<AddressInputPropsModel>({ target: AddressInput });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
