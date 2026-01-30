import { EventTable } from '@lib/frontend/kfn/containers/EventTable/EventTable';
import { type EventTablePropsModel } from '@lib/frontend/kfn/containers/EventTable/EventTable.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<EventTablePropsModel>({
  target: EventTable,
});

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
