import { Table } from '@lib/frontend/core/components/Table/Table';
import type { TableFixtureRowModel } from '@lib/frontend/core/components/Table/Table.fixtures';
import {
  TABLE_FIXTURE_COLUMNS,
  TABLE_FIXTURE_DATA,
} from '@lib/frontend/core/components/Table/Table.fixtures';
import type { TablePropsModel } from '@lib/frontend/core/components/Table/Table.models';
import { render } from '@lib/frontend/testing/utils/render/render';
import { withTestComponent } from '@lib/frontend/testing/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<TablePropsModel<TableFixtureRowModel>>(
  { defaultProps: { columns: TABLE_FIXTURE_COLUMNS, data: TABLE_FIXTURE_DATA }, target: Table },
);

describe(displayName, () => {
  test('works', async () => {
    const { queryByTestId } = render(<Component />);
    expect(queryByTestId(testID)).toBeTruthy();
  });
});
