import { SpecificationDetail } from '@lib/frontend/api/components/SpecificationDetail/SpecificationDetail';
import { type SpecificationDetailPropsModel } from '@lib/frontend/api/components/SpecificationDetail/SpecificationDetail.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SpecificationDetailPropsModel>({ target: SpecificationDetail });

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
