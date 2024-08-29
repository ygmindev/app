import { Table } from '@lib/frontend/data/components/Table/Table';
import { type TableFixtureRowModel } from '@lib/frontend/data/components/Table/Table.fixtures';
import {
  TABLE_FIXTURE_COLUMNS,
  TABLE_FIXTURE_DATA,
} from '@lib/frontend/data/components/Table/Table.fixtures';
import { type TablePropsModel } from '@lib/frontend/data/components/Table/Table.models';
import { render } from '@lib/frontend/test/utils/render/render';
import { withTestComponent } from '@lib/frontend/test/utils/withTestComponent/withTestComponent';

const { Component, displayName, testID } = withTestComponent<TablePropsModel<TableFixtureRowModel>>(
  { defaultProps: { columns: TABLE_FIXTURE_COLUMNS, data: TABLE_FIXTURE_DATA }, target: Table },
);

describe(displayName, () => {
  test('works', async () => {
    const { findByTestId } = await render({ element: <Component /> });
    expect(await findByTestId(testID)).toBeTruthy();
  });
});
