import { WrappedList } from '@lib/frontend/core/components/WrappedList/WrappedList';
import { type WrappedListPropsModel } from '@lib/frontend/core/components/WrappedList/WrappedList.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<WrappedListPropsModel>({
  target: WrappedList,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
