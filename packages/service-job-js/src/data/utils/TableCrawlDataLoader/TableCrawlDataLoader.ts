import { type SourcedEntityResourceModel } from '@lib/model/data/SourcedEntityResource/SourcedEntityResource.models';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject';
import { isNumeric } from '@lib/shared/core/utils/isNumeric/isNumeric';
import { mapParallel } from '@lib/shared/core/utils/mapParallel/mapParallel';
import { CrawlDataLoader } from '@service/job/data/utils/CrawlDataLoader/CrawlDataLoader';
import {
  type TableCrawlDataLoaderModel,
  type TableCrawlDataLoaderParamsModel,
} from '@service/job/data/utils/TableCrawlDataLoader/TableCrawlDataLoader.models';
import isFunction from 'lodash/isFunction';

export class TableCrawlDataLoader<
    TType extends SourcedEntityResourceModel,
    TResponse extends Record<string, unknown> = Record<string, unknown>,
  >
  extends CrawlDataLoader<TType>
  implements TableCrawlDataLoaderModel<TType>
{
  constructor({
    cellsSelector = { value: 'th, td' },
    dateSelector,
    lastUpdatedSelector,
    nCols,
    nRows,
    rowsSelector = { value: 'tr' },
    skipRows = 0,
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
            ? await rowsSelector(screen, table)
            : await table.findAll(rowsSelector);
          nRows && (rows = rows.slice(0, nRows + 1));

          const values = [] as Array<Array<string | null>>;
          for (const row of rows) {
            let cells = isFunction(cellsSelector)
              ? await cellsSelector(screen, row)
              : await row.findAll(cellsSelector);
            nCols && (cells = cells.slice(0, nCols));
            values.push(await mapParallel(cells?.map((h) => async () => h.text())));
          }

          const headers = values.slice(0, skipRows + 1);
          const rowData = values.slice(skipRows + 1);
          const headersF = headers[0].map((h) => h ?? '');
          const data = rowData.map(
            (row) =>
              cleanObject(
                Object.fromEntries(
                  headersF.map((key, i) => {
                    const v = row[i];
                    return [key, !!v && isNumeric(v) ? parseFloat(v) : v];
                  }),
                ),
              ) as TResponse,
          );
          const result: {
            data: Array<TResponse>;
            date?: string | null;
            headers: Array<string>;
            lastUpdated?: string | null;
          } = {
            data,
            headers: headersF,
          };

          if (lastUpdatedSelector) {
            const lastUpdated = isFunction(lastUpdatedSelector)
              ? await lastUpdatedSelector(screen, table)
              : await table.find(lastUpdatedSelector);
            lastUpdated && (result.lastUpdated = await lastUpdated.text());
          }

          if (dateSelector) {
            const date = isFunction(dateSelector)
              ? await dateSelector(screen, table)
              : await table.find(dateSelector);
            date && (result.date = await date.text());
          }

          return transformer(result);
        }
        return [];
      },
    });
  }
}
