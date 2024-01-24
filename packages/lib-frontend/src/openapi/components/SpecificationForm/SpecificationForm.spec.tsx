import { SpecificationForm } from '@lib/frontend/openapi/components/SpecificationForm/SpecificationForm';
import { type SpecificationFormPropsModel } from '@lib/frontend/openapi/components/SpecificationForm/SpecificationForm.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SpecificationFormPropsModel>({ target: SpecificationForm });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
