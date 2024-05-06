import { Price } from '@lib/frontend/commerce/components/Price/Price';
import { type PricePropsModel } from '@lib/frontend/commerce/components/Price/Price.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<PricePropsModel>({ target: Price });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
