import { {{NAME}} } from '{{PATH}}/{{NAME}}/{{NAME}}';
import type { {{NAME}}PropsModel } from '{{PATH}}/{{NAME}}/{{NAME}}.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<{{NAME}}PropsModel>({ target: {{NAME}} });

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
