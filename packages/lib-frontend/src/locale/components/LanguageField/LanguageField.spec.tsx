import { LanguageField } from '@lib-frontend/locale/components/LanguageField/LanguageField';
import { type LanguageFieldPropsModel } from '@lib-frontend/locale/components/LanguageField/LanguageField.models';
import { render } from '@lib-frontend/test/utils/render/render';
import { withTestComponent } from '@lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<LanguageFieldPropsModel>({ target: LanguageField });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
