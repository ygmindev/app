import { withStory } from '@app/web-storybook/utils/withStory/withStory';
import { Table } from '@lib/frontend/core/components/Table/Table';
import type { TableFixtureRowModel } from '@lib/frontend/core/components/Table/Table.fixtures';
import {
  TABLE_FIXTURE_COLUMNS,
  TABLE_FIXTURE_DATA,
} from '@lib/frontend/core/components/Table/Table.fixtures';
import type { TablePropsModel } from '@lib/frontend/core/components/Table/Table.models';
import { Wrapper } from '@lib/frontend/core/components/Wrapper/Wrapper';

const { Story, meta } = withStory<TablePropsModel<TableFixtureRowModel>>({
  defaultProps: {
    columns: TABLE_FIXTURE_COLUMNS,
    data: TABLE_FIXTURE_DATA,
  },
  displayName: 'Table',
  target: (props) => (
    <Wrapper height={500} width={500}>
      <Table {...props} />
    </Wrapper>
  ),
});

export { Story, meta as default };
