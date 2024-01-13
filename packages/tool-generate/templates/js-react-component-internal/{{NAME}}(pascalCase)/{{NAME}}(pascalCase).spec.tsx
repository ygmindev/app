import { type {{NAME}}PropsModel } from '{{PATH}}/{{NAME}}/{{NAME}}.models';
import { {{NAME}} } from '{{PATH}}/{{NAME}}/{{NAME}}';
import { render } from '@lib-frontend/test/utils/render/render';
import { withTestComponent } from '@lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<{{NAME}}(pascalCase)PropsModel>({
  target: {{NAME}}(pascalCase),
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
