import { InputGroup } from '@lib/frontend/data/components/InputGroup/InputGroup';
import { type InputGroupPropsModel } from '@lib/frontend/data/components/InputGroup/InputGroup.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<InputGroupPropsModel>({
  target: InputGroup,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
