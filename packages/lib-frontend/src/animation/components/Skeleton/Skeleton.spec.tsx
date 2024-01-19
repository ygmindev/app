import { Skeleton } from '@lib/frontend/animation/components/Skeleton/Skeleton';
import { type SkeletonPropsModel } from '@lib/frontend/animation/components/Skeleton/Skeleton.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SkeletonPropsModel>({
  target: Skeleton,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
