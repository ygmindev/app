import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { writeFile } from '@lib/backend/file/utils/writeFile/writeFile';
import { stringify } from '@lib/shared/core/utils/stringify/stringify';
import { withScreen } from '@lib/shared/crawling/utils/withScreen/withScreen';
import { SELECTOR_TYPE } from '@lib/shared/crawling/utils/withScreen/withScreen.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { stringify as csv } from 'csv-stringify/sync';
import range from 'lodash/range';
import toNumber from 'lodash/toNumber';

const crawl: TaskParamsModel<unknown> = {
  name: 'home-depot-crawl',

  task: [
    async () => {
      await withScreen(async (screen) => {
        const result: Array<Record<string, unknown>> = [];

        const pageIndices = range(0, 21);
        for (const index of pageIndices) {
          await screen.open(
            `https://www.homedepot.com/b/Lumber-Composites/N-5yc1vZbqpg?catStyle=ShowProducts&sortorder=desc&sortby=topsellers&Nao=${index * 24}`,
          );
          const urls = await screen
            .findAll({ value: '.product-image' })
            .then((handles) => handles.map((h) => h?.url()));

          for (const url of urls) {
            const urlF = await url;
            if (urlF?.startsWith('https://www.homedepot.com')) {
              try {
                const row: Record<string, unknown> = {};
                await screen.open(urlF);

                const accordions = await screen.findAll({ value: '.accordion-title-container' });
                for (const accordion of accordions) {
                  await accordion.press();
                }

                // title
                row.title = await screen
                  .find({
                    key: 'data-component',
                    type: SELECTOR_TYPE.DATA,
                    value: 'ProductDetailsTitle',
                  })
                  .then((h) => h?.find({ value: 'h1' }).then((h) => h?.text()));

                // description
                row.description = await screen
                  .find({ value: '.desktop-content-wrapper__main-description' })
                  .then((h) => h?.text());

                // price
                const priceContainer = await screen.find({ value: '.price-format__main-price' });
                if (priceContainer) {
                  const spans = await priceContainer.findAll({
                    value: 'span',
                  });
                  const dollar = await spans[1]?.text();
                  const cent = await spans[3]?.text();
                  row.price = toNumber(`${dollar ?? 0}.${cent ?? 0}`);
                }

                // dimensions
                row.len = await screen
                  .find({ type: SELECTOR_TYPE.TEXT, value: 'Actual Product Length (in.)' })
                  .then((h) => h?.next())
                  .then((h) => h?.text())
                  .then((h) => h?.replace(' in', ''))
                  .then((h) => toNumber(h));

                row.width = await screen
                  .find({ type: SELECTOR_TYPE.TEXT, value: 'Actual Product Width (in.)' })
                  .then((h) => h?.next())
                  .then((h) => h?.text())
                  .then((h) => h?.replace(' in', ''))
                  .then((h) => toNumber(h));

                row.thickness = await screen
                  .find({ type: SELECTOR_TYPE.TEXT, value: 'Actual Product Thickness (in.)' })
                  .then((h) => h?.next())
                  .then((h) => h?.text())
                  .then((h) => h?.replace(' in', ''))
                  .then((h) => toNumber(h));

                // images
                const thumbnails = await screen.findAll({ value: '.mediagallery__imgblock' });
                let i = 1;
                for (const thumbnail of thumbnails) {
                  await thumbnail.press();
                  const src = await screen
                    .find({ value: '.mediagallery__mainimage' })
                    .then((h) =>
                      h?.find({
                        key: 'data-testid',
                        type: SELECTOR_TYPE.DATA,
                        value: 'small-image',
                      }),
                    )
                    .then((h) => h?.src());
                  row[`image-${i}`] = src;
                  i++;
                }

                console.warn(stringify(row));
                result.push(row);

                if (result) {
                  const headers = Object.keys(result[0]);
                  const resultF = [
                    headers,
                    ...result.map((row) => headers.map((h) => stringify(row[h]))),
                  ];
                  writeFile({
                    filename: fromWorking('result.csv'),
                    value: csv(resultF),
                  });
                }
              } catch (e) {
                console.warn(e);
              }
            }
          }
        }
      });
    },
  ],
};

export default crawl;
