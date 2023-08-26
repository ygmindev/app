import { GroupField } from '#lib-frontend/form/components/GroupField/GroupField';
import { type GroupFieldPropsModel } from '#lib-frontend/form/components/GroupField/GroupField.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<GroupFieldPropsModel>({ target: GroupField });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
