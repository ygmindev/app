import { TaskTable } from '@lib/frontend/orchestrator/containers/TaskTable/TaskTable';
import { type TaskTablePropsModel } from '@lib/frontend/orchestrator/containers/TaskTable/TaskTable.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<TaskTablePropsModel>({
  target: TaskTable,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
