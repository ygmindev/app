import { SpecificationInputForm } from '@lib/frontend/openapi/components/SpecificationInputForm/SpecificationInputForm';
import { type SpecificationInputFormPropsModel } from '@lib/frontend/openapi/components/SpecificationInputForm/SpecificationInputForm.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SpecificationInputFormPropsModel>({
  target: SpecificationInputForm,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
