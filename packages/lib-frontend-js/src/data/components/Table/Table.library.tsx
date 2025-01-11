import { WrapperFixture } from '@lib/frontend/core/components/Wrapper/Wrapper.fixtures';
import { Table } from '@lib/frontend/data/components/Table/Table';
import {
  TABLE_FIXTURE_COLUMNS,
  TABLE_FIXTURE_DATA,
} from '@lib/frontend/data/components/Table/Table.fixtures';
import { type TablePropsModel } from '@lib/frontend/data/components/Table/Table.models';
import { type LibraryPropsModel } from '@lib/frontend/library/components/Library/Library.models';

export const props: LibraryPropsModel<TablePropsModel<unknown>> = {
  Component: Table,
  Renderer: ({ element }) => <WrapperFixture>{element}</WrapperFixture>,
  defaultProps: {
    columns: TABLE_FIXTURE_COLUMNS,
    data: TABLE_FIXTURE_DATA,
  } as TablePropsModel<unknown>,
};
