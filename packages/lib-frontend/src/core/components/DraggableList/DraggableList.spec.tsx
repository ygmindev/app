import { type DraggableListPropsModel } from '@lib/frontend/core/components/DraggableList/DraggableList.models';
import { DraggableList } from '@lib/frontend/core/components/DraggableList/DraggableList';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<DraggableListPropsModel>({
  target: DraggableList,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
