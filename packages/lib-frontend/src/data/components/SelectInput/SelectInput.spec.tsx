import { SelectInput } from '@lib/frontend/data/components/SelectInput/SelectInput';
import { type SelectInputPropsModel } from '@lib/frontend/data/components/SelectInput/SelectInput.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SelectInputPropsModel>({
  target: SelectInput,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
