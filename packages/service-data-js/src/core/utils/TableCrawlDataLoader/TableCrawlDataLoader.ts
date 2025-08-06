import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';
import { isNumeric } from '@lib/shared/core/utils/isNumeric/isNumeric';
import { mapParallel } from '@lib/shared/core/utils/mapParallel/mapParallel';
import { type SourcedEntityResourceModel } from '@service/data/core/core.models';
import { CrawlDataLoader } from '@service/data/core/utils/CrawlDataLoader/CrawlDataLoader';
import {
  type TableCrawlDataLoaderModel,
  type TableCrawlDataLoaderParamsModel,
} from '@service/data/core/utils/TableCrawlDataLoader/TableCrawlDataLoader.models';
import isFunction from 'lodash/isFunction';

export class TableCrawlDataLoader<
    TType extends SourcedEntityResourceModel,
    TResponse extends Record<string, unknown>,
  >
  extends CrawlDataLoader<TType>
  implements TableCrawlDataLoaderModel<TType>
{
  constructor({
    cellsSelector = { value: 'th, td' },
    nCols,
    nRows,
    rowsSelector = { value: 'tr' },
    tableSelector = { value: 'table' },
    transformer,
    ...params
  }: TableCrawlDataLoaderParamsModel<TType, TResponse>) {
    super({
      ...params,
      transformer: async (screen) => {
        const table = isFunction(tableSelector)
          ? await tableSelector(screen)
          : await screen.find(tableSelector);

        if (table) {
          let rows = isFunction(rowsSelector)
            ? await rowsSelector(table)
            : await table.findAll(rowsSelector);
          nRows && (rows = rows.slice(0, nRows + 1));

          const values = [] as Array<Array<string | null>>;
          for (const row of rows) {
            let cells = isFunction(cellsSelector)
              ? await cellsSelector(row)
              : await row.findAll(cellsSelector);
            nCols && (cells = cells.slice(0, nCols));
            values.push(await mapParallel(cells?.map((h) => async () => h.text())));
          }
          const [headerData, ...rowData] = values;
          const result = rowData.map(
            (row) =>
              cleanObject(
                Object.fromEntries(
                  headerData.map((key, i) => {
                    const v = row[i];
                    return [key ?? '', !!v && isNumeric(v) ? parseFloat(v) : v];
                  }),
                ),
              ) as TResponse,
          );
          return transformer(result);
        }
        return [];
      },
    });
  }
}
