import { Tabs } from '@lib/frontend/core/components/Tabs/Tabs';
import type { TabsPropsModel } from '@lib/frontend/core/components/Tabs/Tabs.models';
import type { OptionModel } from '@lib/frontend/core/core.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const FIRST_CHILDREN = 'FIRST_CHILDREN';
const SECOND_CHILDREN = 'SECOND_CHILDREN';

const TABS: Array<OptionModel> = [
  {
    id: FIRST_CHILDREN,
    label: FIRST_CHILDREN,
  },
  {
    id: SECOND_CHILDREN,
    label: SECOND_CHILDREN,
  },
];

const { Component, displayName, testID } = withTestComponent<TabsPropsModel>({
  defaultProps: {
    tabs: TABS,
  },
  target: Tabs,
});

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
