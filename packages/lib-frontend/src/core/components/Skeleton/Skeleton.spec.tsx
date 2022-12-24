import { Skeleton } from '@lib/frontend/core/components/Skeleton/Skeleton';
import type { SkeletonPropsModel } from '@lib/frontend/core/components/Skeleton/Skeleton.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<SkeletonPropsModel>({
  target: Skeleton,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
