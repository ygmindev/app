import { AgencyForm } from '#lib-frontend/funding/containers/AgencyForm/AgencyForm';
import { type AgencyFormPropsModel } from '#lib-frontend/funding/containers/AgencyForm/AgencyForm.models';
import { render } from '#lib-frontend/test/utils/render/render';
import { withTestComponent } from '#lib-frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<AgencyFormPropsModel>({
  target: AgencyForm,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
