import { TextFilterField } from '@lib-frontend/data/components/TextFilterField/TextFilterField';
import { type TextFilterFieldPropsModel } from '@lib-frontend/data/components/TextFilterField/TextFilterField.models';
import { render } from '@lib-frontend/test/utils/render/render';
import { withTestComponent } from '@lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<TextFilterFieldPropsModel>({
  target: TextFilterField,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
