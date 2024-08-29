import { LanguageInput } from '@lib/frontend/locale/components/LanguageInput/LanguageInput';
import { type LanguageInputPropsModel } from '@lib/frontend/locale/components/LanguageInput/LanguageInput.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<LanguageInputPropsModel>({ target: LanguageInput });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
