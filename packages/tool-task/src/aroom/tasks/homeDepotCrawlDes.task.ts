import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { writeFile } from '@lib/backend/file/utils/writeFile/writeFile';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { slug } from '@lib/shared/core/utils/slug/slug';
import { withScreen } from '@lib/shared/crawling/utils/withScreen/withScreen';
import { SELECTOR_TYPE } from '@lib/shared/crawling/utils/withScreen/withScreen.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { stringify as csv } from 'csv-stringify/sync';
import range from 'lodash/range';
import sortBy from 'lodash/sortBy';

const ELEMENT_TIMEOUT = 7000;

const crawl: TaskParamsModel<unknown> = {
  name: 'home-depot-crawl-des',

  task: [
    async () => {
      await withScreen(async (screen) => {
        const result: Array<Record<string, unknown>> = [];
        let resultF: Array<Array<string>> = [];

        const categories = [
          // 'https://www.homedepot.com/b/Building-Materials/N-5yc1vZaqnsZbwo5l?NCNI-5&sortorder=desc&sortby=topsellers',
          'https://www.homedepot.com/b/Hardware-Fasteners/N-5yc1vZc255?catStyle=ShowProducts&sortorder=desc&sortby=topsellers',
          'https://www.homedepot.com/b/Paint-Paint-Supplies-Tape/N-5yc1vZc5dk?sortorder=desc&sortby=topsellers',
          'https://www.homedepot.com/b/Tools/N-5yc1vZc1xy?catStyle=ShowProducts&sortorder=desc&sortby=topsellers',
          'https://www.homedepot.com/b/Lumber-Composites/N-5yc1vZbqpg?catStyle=ShowProducts&NCNI-5&searchRedirect=lumber&semanticToken=k27r10r00f22000000000e_202402090359488677805831880_us-east4-6fkc%20k27r10r00f22000000000e%20%3E%20st%3A%7Blumber%7D%3Ast%20ml%3A%7B24%7D%3Aml%20nr%3A%7Blumber%7D%3Anr%20nf%3A%7Bn%2Fa%7D%3Anf%20qu%3A%7Blumber%7D%3Aqu%20ie%3A%7B0%7D%3Aie%20qr%3A%7Blumber%7D%3Aqr&sortorder=desc&sortby=topsellers',
          'https://www.homedepot.com/b/Paint/N-5yc1vZar2d?catStyle=ShowProducts&sortorder=desc&sortby=topsellers',
          'https://www.homedepot.com/b/Flooring/N-5yc1vZaq7r?catStyle=ShowProducts&sortorder=desc&sortby=topsellers',
        ];

        const pageIndices = range(8, 30);
        for (const index of pageIndices) {
          console.warn(`@@@ PAGE: ${index}`);
          for (const category of categories) {
            try {
              await screen.open(`${category}&Nao=${index * 24}`);

              await sleep(3000);
              const urls = await screen
                .findAll({ value: '.product-image' })
                .then((handles) => handles.map((h) => h?.url()));

              for (const url of urls) {
                try {
                  const urlF = await url;
                  if (urlF?.startsWith('https://www.homedepot.com')) {
                    const row: Record<string, unknown> = {};
                    await screen.open(urlF);

                    const accordions = await screen.findAll({
                      value: '.accordion-title-container',
                    });
                    for (const accordion of accordions) {
                      await accordion.press();
                    }

                    // title
                    row.Title =
                      (await screen
                        .find({
                          key: 'data-component',
                          type: SELECTOR_TYPE.DATA,
                          value: 'ProductDetailsTitle',
                        })
                        .then((h) => h?.find({ value: 'h1' }).then((h) => h?.text()))) ?? '';
                    row.Title && (row.Handle = slug(row.Title as string));

                    row['Body (HTML)'] = await screen
                      .find({
                        key: 'data-testid',
                        type: SELECTOR_TYPE.DATA,
                        value: 'desktop-content',
                      })
                      .then((h) => h?.find({ value: '.sui-flex-col' }))
                      .then((h) => h?.find({ value: '.sui-flex-col' }))
                      .then((h) => h?.content());
                    row.URL = urlF;

                    result.push(row);

                    if (result) {
                      let headersAll = result.map((row) => Object.keys(row));
                      headersAll = sortBy(headersAll, (v) => -1 * v.length);
                      const [headers, ..._] = headersAll;
                      resultF = [
                        headers,
                        ...result.map((row) => headers.map((h) => `${row[h] as string}`)),
                      ];
                      writeFile({ filename: fromWorking('result_des.csv'), value: csv(resultF) });
                    }
                  }
                } catch (e) {
                  console.warn(e);
                  continue;
                }
              }
            } catch (e) {
              console.warn(e);
              continue;
            }
          }
        }
      });
    },
  ],
};

export default crawl;
