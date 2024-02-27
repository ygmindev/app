import { createLambdaHandler } from '@lib/backend/serverless/utils/createLambdaHandler/createLambdaHandler';
import { LAMBDA_PLUGIN } from '@lib/backend/serverless/utils/createLambdaHandler/createLambdaHandler.constants';
import { ConcurrentQueue } from '@lib/shared/core/utils/ConcurrentQueue/ConcurrentQueue';
import { runWithRetry } from '@lib/shared/core/utils/runWithRetry/runWithRetry';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { slug } from '@lib/shared/core/utils/slug/slug';
import { withScreen } from '@lib/shared/crawling/utils/withScreen/withScreen';
import { SELECTOR_TYPE } from '@lib/shared/crawling/utils/withScreen/withScreen.constants';
import { HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';
import { info } from '@lib/shared/logging/utils/logger/logger';
import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import toNumber from 'lodash/toNumber';
import trimStart from 'lodash/trimStart';
import uniq from 'lodash/uniq';

export const main = createLambdaHandler<{
  category: string;
  link: string;
  maxItems?: number;
  pageIndex?: number;
  start?: number;
}>({
  handler: async ({ body }) => {
    const { category, link } = body ?? {};
    const maxItems = body?.maxItems ? toNumber(body?.maxItems) : 100;
    const pageIndex = body?.pageIndex ? toNumber(body?.pageIndex) : 0;
    const start = body?.start ? toNumber(body?.start) : 0;

    const PAGE_SIZE = 24;
    const UPLOAD_SIZE = 3;
    const ELEMENT_TIMEOUT = 5000;
    const COLUMNS = [
      'Extra',
      'Tags',
      'Vendor',
      'Title',
      'Handle',
      'Body (HTML)',
      'Cost per Item',
      'Length',
      'Length Unit',
      'Width',
      'Width Unit',
      'Thickness',
      'Thickness Unit',
      'Variant Grams',
      'URL',
      'Image Src',
      'Image Position',
      'Variant Price',
      'Page',
      'Count',
      'Updated',
    ];

    await withScreen(async (screen) => {
      let result: Array<Record<string, string | number>> = [];

      const auth = new JWT({
        email: process.env.SERVER_GOOGLE_EMAIL,
        key: process.env.SERVER_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
        scopes: [
          'https://www.googleapis.com/auth/spreadsheets',
          'https://www.googleapis.com/auth/drive.file',
        ],
      });
      const doc = new GoogleSpreadsheet('1Y50rGvzXzPNcnDjm4xkJ1AnxKIYsKBaooeraCpankiw', auth);
      await doc.loadInfo();
      const [sheet] = doc.sheetsByIndex;

      const upload = async (value: Array<Record<string, string | number>>): Promise<void> =>
        runWithRetry(
          async () => {
            if (value) {
              const valueF = value.map((row) => ({ ...row, Updated: new Date().toLocaleString() }));
              await sheet.addRows(valueF);
              await sheet.saveUpdatedCells();
            }
          },
          { delay: 1000, retries: 10 },
        );

      let count = start + 1;

      try {
        await screen.open(`${link}${pageIndex > 0 ? `&Nao=${pageIndex * PAGE_SIZE}` : ''}`);
        await sleep(3000);

        await screen
          .find({ value: '.results-layout__toggle-grid' }, { timeout: ELEMENT_TIMEOUT })
          .then((h) => h?.press());

        const urls = await Promise.all(
          await screen
            .findAll({ value: '.browse-search__pod' })
            .then((handles) =>
              handles?.map((h) => h.find({ value: '.product-image' }).then((h) => h?.url())),
            ),
        );

        for (const url of start ? urls.slice(start) : urls) {
          if (maxItems && count > maxItems) {
            break;
          }

          try {
            if (url?.startsWith('https://www.homedepot.com')) {
              const itemQueue = new ConcurrentQueue();
              const row: Record<string, unknown> = {};
              COLUMNS.forEach((column) => (row[column] = ''));

              await runWithRetry(async () => screen.open(url), { delay: 1000, retries: 5 });

              const accordions = await screen.findAll({
                value: '.accordion-title-container',
              });
              for (const accordion of accordions) {
                try {
                  await accordion.press();
                } catch (e) {}
              }

              row.Extra = category;

              // category
              itemQueue.add(async () => {
                let tags = [];
                const categories = await screen
                  .findAll({ value: '.breadcrumb__item a' })
                  .then((handles) => handles.map((h) => h?.text()));
                for (const category of categories) {
                  const categoryF = await category;
                  categoryF && categoryF !== 'Home' && tags.push(categoryF);
                }
                tags = uniq(tags);
                row.Tags = tags ? tags.join(',') : '';
              });

              // brand
              itemQueue.add(async () => {
                row.Vendor = (await screen.find({ value: '.brand' }).then((h) => h?.text())) ?? '';
              });

              // title
              itemQueue.add(async () => {
                row.Title =
                  (await screen
                    .find({
                      key: 'data-component',
                      type: SELECTOR_TYPE.DATA,
                      value: 'ProductDetailsTitle',
                    })
                    .then((h) => h?.find({ value: 'h1' }).then((h) => h?.text()))) ?? '';
                row.Title && (row.Handle = slug(row.Title as string));
              });

              // description
              itemQueue.add(async () => {
                row['Body (HTML)'] = await screen
                  .find({
                    key: 'data-testid',
                    type: SELECTOR_TYPE.DATA,
                    value: 'desktop-content',
                  })
                  .then((h) => h?.find({ value: '.sui-flex-col' }))
                  .then((h) => h?.find({ value: '.sui-flex-col' }))
                  .then((h) => h?.content());

                row['Body (HTML)'] =
                  row['Body (HTML)'] ??
                  (await screen
                    .find({ value: '.desktop-content-wrapper__main-description' })
                    .then((h) => h?.content()));
              });

              // price
              itemQueue.add(async () => {
                const priceContainer = await screen.find({
                  value: '.price-format__main-price',
                });
                if (priceContainer) {
                  const spans = await priceContainer.findAll({
                    value: 'span',
                  });
                  const dollar = await spans[1]?.text();
                  const cent = await spans[3]?.text();
                  row['Cost per Item'] =
                    dollar && cent ? toNumber(`${dollar ?? 0}.${cent ?? 0}`) : '';
                  row['Cost per Item'] &&
                    (row['Variant Price'] = ((row['Cost per Item'] as number) * 1.075).toFixed(2));
                }
              });

              const specificationsContainer = await screen.find(
                { value: '.specifications' },
                { timeout: ELEMENT_TIMEOUT },
              );
              if (specificationsContainer) {
                // dimensions
                itemQueue.add(async () => {
                  const v = await specificationsContainer
                    .find(
                      { type: SELECTOR_TYPE.TEXT, value: 'ength (ft' },
                      { timeout: ELEMENT_TIMEOUT },
                    )
                    .then((h) => h?.next())
                    .then((h) => h?.text())
                    .then((h) => h?.replace(' ft.', '').replace(' ft', ''))
                    .then((h) => h && toNumber(trimStart(eval(h) as string, '0')));
                  if (v) {
                    row.Length = v;
                    row['Length Unit'] = 'ft';
                  }
                });

                itemQueue.add(async () => {
                  const v = await specificationsContainer
                    .find(
                      { type: SELECTOR_TYPE.TEXT, value: 'ength (in' },
                      { timeout: ELEMENT_TIMEOUT },
                    )
                    .then((h) => h?.next())
                    .then((h) => h?.text())
                    .then((h) => h?.replace(' in.', '').replace(' in', ''))
                    .then((h) => h && toNumber(trimStart(eval(h) as string, '0')));
                  if (v) {
                    row.Length = v;
                    row['Length Unit'] = 'in';
                  }
                });

                itemQueue.add(async () => {
                  const v = await specificationsContainer
                    .find(
                      { type: SELECTOR_TYPE.TEXT, value: 'idth (ft' },
                      { timeout: ELEMENT_TIMEOUT },
                    )
                    .then((h) => h?.next())
                    .then((h) => h?.text())
                    .then((h) => h?.replace(' ft.', '').replace(' ft', ''))
                    .then((h) => h && toNumber(trimStart(eval(h) as string, '0')));
                  if (v) {
                    row.Width = v;
                    row['Width Unit'] = 'ft';
                  }
                });

                itemQueue.add(async () => {
                  const v = await specificationsContainer
                    .find(
                      { type: SELECTOR_TYPE.TEXT, value: 'idth (in' },
                      { timeout: ELEMENT_TIMEOUT },
                    )
                    .then((h) => h?.next())
                    .then((h) => h?.text())
                    .then((h) => h?.replace(' in.', '').replace(' in', ''))
                    .then((h) => h && toNumber(trimStart(eval(h) as string, '0')));
                  if (v) {
                    row.Width = v;
                    row['Width Unit'] = 'in';
                  }
                });

                itemQueue.add(async () => {
                  const v = await specificationsContainer
                    .find(
                      { type: SELECTOR_TYPE.TEXT, value: 'hickness (ft' },
                      { timeout: ELEMENT_TIMEOUT },
                    )
                    .then((h) => h?.next())
                    .then((h) => h?.text())
                    .then((h) => h?.replace(' ft.', '').replace(' ft', ''))
                    .then((h) => h && toNumber(trimStart(eval(h) as string, '0')));
                  if (v) {
                    row.Thickness = v;
                    row['Thickness Unit'] = 'ft';
                  }
                });

                itemQueue.add(async () => {
                  const v = await specificationsContainer
                    .find(
                      { type: SELECTOR_TYPE.TEXT, value: 'hickness (in' },
                      { timeout: ELEMENT_TIMEOUT },
                    )
                    .then((h) => h?.next())
                    .then((h) => h?.text())
                    .then((h) => h?.replace(' in.', '').replace(' in', ''))
                    .then((h) => h && toNumber(trimStart(eval(h) as string, '0')));
                  if (v) {
                    row.Thickness = v;
                    row['Thickness Unit'] = 'in';
                  }
                });

                itemQueue.add(async () => {
                  const v = await specificationsContainer
                    .find(
                      { type: SELECTOR_TYPE.TEXT, value: 'eight (grams' },
                      { timeout: ELEMENT_TIMEOUT },
                    )
                    .then((h) => h?.next())
                    .then((h) => h?.text())
                    .then((h) => h?.replace(' grams', ''))
                    .then((h) => h && toNumber(trimStart(eval(h) as string, '0')));
                  if (v) {
                    row['Variant Grams'] = v;
                  }
                });

                itemQueue.add(async () => {
                  const v = await specificationsContainer
                    .find(
                      { type: SELECTOR_TYPE.TEXT, value: 'eight (lb' },
                      { timeout: ELEMENT_TIMEOUT },
                    )
                    .then((h) => h?.next())
                    .then((h) => h?.text())
                    .then((h) => h?.replace(' lb.', '').replace(' lb', ''))
                    .then((h) => h && toNumber(trimStart(eval(h) as string, '0')));
                  if (v) {
                    row['Variant Grams'] = (v * 453.6).toFixed(3);
                  }
                });
              }

              await itemQueue.run();

              // images
              const thumbnails = await screen.findAll({ value: '.mediagallery__imgblock' });
              let i = 1;
              for (const thumbnail of thumbnails) {
                await thumbnail.press();
                const src = await screen
                  .find({ value: '.mediagallery__mainimage' })
                  .then((h) => h?.find({ value: 'img' }))
                  .then((h) => h?.src());

                if (src) {
                  row.URL = url;
                  row.Count = count + 1;
                  row.Page = pageIndex + 1;
                  const rowToAdd =
                    i > 1
                      ? {
                          Count: row.Count,
                          Extra: row.Extra,
                          Handle: row.Handle,
                          Page: row.Page,
                        }
                      : row;
                  rowToAdd['Image Src'] = src;
                  rowToAdd['Image Position'] = i;
                  result.push(rowToAdd as Record<string, string | number>);
                  i++;
                }
              }
              info(`Adding item: ${url}`);

              itemQueue.clear();

              if (result) {
                if (result.length > 0 && count % UPLOAD_SIZE === 0) {
                  await upload(result);
                  result = [];
                }
                count++;
              }
            }
          } catch (e) {
            console.warn(e);
            continue;
          }
        }
      } catch (e) {
        console.warn(e);
        return;
      }

      if (result.length > 0) {
        await upload(result);
        result = [];
      }

      await screen.close();
    });

    return {
      body: { message: 'success' },
      headers: { 'Access-Control-Allow-Origin': '*' },
      statusCode: HTTP_STATUS_CODE.SUCCESS,
    };
  },
  plugins: [LAMBDA_PLUGIN.AUTHENTICATION],
});
