import { ItemField } from '@lib/frontend/core/components/ItemField/ItemField';
import { type ItemFieldPropsModel } from '@lib/frontend/core/components/ItemField/ItemField.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ItemFieldPropsModel>({
  target: ItemField,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
