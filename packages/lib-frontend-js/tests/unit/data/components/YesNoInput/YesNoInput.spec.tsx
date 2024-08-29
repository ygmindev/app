import { YesNoInput } from '@lib/frontend/data/components/YesNoInput/YesNoInput';
import { type YesNoInputPropsModel } from '@lib/frontend/data/components/YesNoInput/YesNoInput.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<YesNoInputPropsModel>({ target: YesNoInput });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
