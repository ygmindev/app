import { MultipleInput } from '@lib/frontend/data/components/MultipleInput/MultipleInput';
import { type MultipleInputPropsModel } from '@lib/frontend/data/components/MultipleInput/MultipleInput.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<MultipleInputPropsModel>({ target: MultipleInput });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
