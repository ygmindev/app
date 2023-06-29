import { {{NAME}}(pascalCase) } from '{{PATH}}/{{NAME}}(pascalCase)/{{NAME}}(pascalCase)';
import { type {{NAME}}(pascalCase)PropsModel } from '{{PATH}}/{{NAME}}(pascalCase)/{{NAME}}(pascalCase).models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<{{NAME}}(pascalCase)PropsModel>({ target: {{NAME}}(pascalCase) });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
