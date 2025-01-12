import { ButtonGroup } from '@lib/frontend/js/core/components/ButtonGroup/ButtonGroup';
import { type ButtonGroupPropsModel } from '@lib/frontend/js/core/components/ButtonGroup/ButtonGroup.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<ButtonGroupPropsModel>({ target: ButtonGroup });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
