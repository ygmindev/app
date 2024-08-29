import { NumberInput } from '@lib/frontend/data/components/NumberInput/NumberInput';
import { type NumberInputPropsModel } from '@lib/frontend/data/components/NumberInput/NumberInput.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<NumberInputPropsModel>({ target: NumberInput });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
