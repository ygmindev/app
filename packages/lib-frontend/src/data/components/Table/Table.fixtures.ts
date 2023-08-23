import range from 'lodash/range';

import { type TableColumnModel } from '#lib-frontend/data/components/Table/Table.models';
import { dateTimeFormat } from '#lib-shared/format/utils/dateTimeFormat/dateTimeFormat';
import { DATE_TIME_FORMAT_TYPE } from '#lib-shared/format/utils/dateTimeFormat/dateTimeFormat.constants';

export type TableFixtureRowModel = {
  dateColumn: Date;
  numberColumn: number;
  stringColumn: string;
};

export const TABLE_FIXTURE_COLUMNS: Array<TableColumnModel<TableFixtureRowModel, unknown>> = [
  {
    id: 'stringColumn',
    label: 'String Column',
  },
  {
    id: 'numberColumn',
    label: 'Number Column',
  },
  {
    formatter: ({ value }) =>
      dateTimeFormat({ format: DATE_TIME_FORMAT_TYPE.DATE, value: value as Date }),
    id: 'dateColumn',
    label: 'Date Column',
  },
];

export const TABLE_FIXTURE_DATA: Array<TableFixtureRowModel> = range(0, 10).map((i) => ({
  dateColumn: new Date(),
  numberColumn: i,
  stringColumn: `string ${i}`,
}));
