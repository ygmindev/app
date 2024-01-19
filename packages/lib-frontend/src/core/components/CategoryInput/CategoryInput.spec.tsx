import { CategoryInput } from '@lib/frontend/core/components/CategoryInput/CategoryInput';
import { type ItemInputPropsModel } from '@lib/frontend/core/components/CategoryInput/CategoryInput.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ItemInputPropsModel>({
  target: CategoryInput,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
