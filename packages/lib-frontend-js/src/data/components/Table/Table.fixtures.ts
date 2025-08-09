import { type TableColumnModel } from '@lib/frontend/data/hooks/useTable/useTable.models';
import { DateTime } from '@lib/shared/datetime/utils/DateTime/DateTime';
import range from 'lodash/range';

export type TableFixtureRowModel = {
  dateColumn: Date;
  numberColumn: number;
  stringColumn: string;
};

export const TABLE_FIXTURE_COLUMNS: Array<TableColumnModel<TableFixtureRowModel>> = [
  {
    id: 'stringColumn',
    label: 'String Column',
  },
  {
    id: 'numberColumn',
    label: 'Number Column',
  },
  {
    formatter: ({ value }) => new DateTime(value as Date).format(),
    id: 'dateColumn',
    label: 'Date Column',
  },
];

export const TABLE_FIXTURE_DATA: Array<TableFixtureRowModel> = range(0, 10).map((i) => ({
  dateColumn: new Date(),
  numberColumn: i,
  stringColumn: `string ${i}`,
}));
