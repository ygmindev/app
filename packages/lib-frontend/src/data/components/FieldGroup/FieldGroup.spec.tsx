import { FieldGroup } from '@lib/frontend/data/components/FieldGroup/FieldGroup';
import { type FieldGroupPropsModel } from '@lib/frontend/data/components/FieldGroup/FieldGroup.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<FieldGroupPropsModel>({
  target: FieldGroup,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
