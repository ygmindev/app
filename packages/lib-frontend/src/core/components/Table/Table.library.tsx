import { Table } from '@lib/frontend/core/components/Table/Table';
import {
  TABLE_FIXTURE_COLUMNS,
  TABLE_FIXTURE_DATA,
} from '@lib/frontend/core/components/Table/Table.fixtures';
import type { TablePropsModel } from '@lib/frontend/core/components/Table/Table.models';
import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import type { LibraryPropsModel } from '@lib/library/core/components/Library/Library.models';

export const props: LibraryPropsModel<TablePropsModel<unknown>> = {
  Component: Table,
  Renderer: (props) => (
    <WrapperFixture>
      <Table {...props} />
    </WrapperFixture>
  ),
  defaultProps: {
    columns: TABLE_FIXTURE_COLUMNS,
    data: TABLE_FIXTURE_DATA,
  } as TablePropsModel<unknown>,
};
