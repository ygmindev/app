import { TextFilterInput } from '@lib/frontend/data/components/TextFilterInput/TextFilterInput';
import { type TextFilterInputPropsModel } from '@lib/frontend/data/components/TextFilterInput/TextFilterInput.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<TextFilterInputPropsModel>({
  target: TextFilterInput,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
