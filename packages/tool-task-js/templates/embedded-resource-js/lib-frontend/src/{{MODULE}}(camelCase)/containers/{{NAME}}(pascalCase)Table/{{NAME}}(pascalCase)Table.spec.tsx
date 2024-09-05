import { {{NAME}}(pascalCase)Table } from '@lib/frontend/{{MODULE}}(camelCase)/containers/{{NAME}}(pascalCase)Table/{{NAME}}(pascalCase)Table';
import { type {{NAME}}(pascalCase)TablePropsModel } from '@lib/frontend/{{MODULE}}(camelCase)/containers/{{NAME}}(pascalCase)Table/{{NAME}}(pascalCase)Table.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<{{NAME}}(pascalCase)TablePropsModel>({
  target: {{NAME}}(pascalCase)Table,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
