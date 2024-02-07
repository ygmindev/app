import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { writeFile } from '@lib/backend/file/utils/writeFile/writeFile';
import { slug } from '@lib/shared/core/utils/slug/slug';
import { withScreen } from '@lib/shared/crawling/utils/withScreen/withScreen';
import { SELECTOR_TYPE } from '@lib/shared/crawling/utils/withScreen/withScreen.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { stringify as csv } from 'csv-stringify/sync';
import range from 'lodash/range';
import sortBy from 'lodash/sortBy';
import toNumber from 'lodash/toNumber';

const ELEMENT_TIMEOUT = 7000;

const crawl: TaskParamsModel<unknown> = {
  name: 'home-depot-crawl',

  task: [
    async () => {
      await withScreen(async (screen) => {
        const result: Array<Record<string, unknown>> = [];
        let resultF: Array<Array<string>> = [];

        const pageIndices = range(0, 21);
        for (const index of pageIndices) {
          try {
            await screen.open(
              `https://www.homedepot.com/b/Building-Materials/N-5yc1vZaqnsZbwo5l?NCNI-5&sortorder=desc&sortby=topsellers&Nao=${index * 24}`,
            );
            const urls = await screen
              .findAll({ value: '.product-image' })
              .then((handles) => handles.map((h) => h?.url()));

            for (const url of urls) {
              try {
                const urlF = await url;
                if (urlF?.startsWith('https://www.homedepot.com')) {
                  const row: Record<string, unknown> = {};
                  await screen.open(urlF);

                  const accordions = await screen.findAll({ value: '.accordion-title-container' });
                  for (const accordion of accordions) {
                    await accordion.press();
                  }

                  // category
                  const tags = [];
                  const categories = await screen
                    .findAll({ value: '.breadcrumb__item a' })
                    .then((handles) => handles.map((h) => h?.text()));
                  for (const category of categories) {
                    const categoryF = await category;
                    categoryF && categoryF !== 'Home' && tags.push(categoryF);
                  }
                  row.Tags = tags ? `"${tags.join(',')}"` : '';

                  // brand
                  row.Vendor =
                    (await screen.find({ value: '.brand' }).then((h) => h?.text())) ?? '';

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

                  // description
                  row['Body (HTML)'] = await screen
                    .find({ value: '.desktop-content-wrapper__main-description' })
                    .then((h) => h?.content());

                  // price
                  const priceContainer = await screen.find({ value: '.price-format__main-price' });
                  if (priceContainer) {
                    const spans = await priceContainer.findAll({
                      value: 'span',
                    });
                    const dollar = await spans[1]?.text();
                    const cent = await spans[3]?.text();
                    row['Variant Price'] =
                      dollar && cent ? toNumber(`${dollar ?? 0}.${cent ?? 0}`) : '';
                  }

                  const specificationsContainer = await screen.find({ value: '.specifications' });
                  if (specificationsContainer) {
                    // dimensions
                    row.Length =
                      (await specificationsContainer
                        .find(
                          { type: SELECTOR_TYPE.TEXT, value: 'ength (ft.)' },
                          { timeout: ELEMENT_TIMEOUT },
                        )
                        .then((h) => h?.next())
                        .then((h) => h?.text())
                        .then((h) => h?.replace(' ft.', '').replace(' ft', ''))
                        .then((h) => h && toNumber(h))) ?? '';
                    if (!row.Length) {
                      row.Length =
                        (await specificationsContainer
                          .find(
                            { type: SELECTOR_TYPE.TEXT, value: 'ength (in.)' },
                            { timeout: ELEMENT_TIMEOUT },
                          )
                          .then((h) => h?.next())
                          .then((h) => h?.text())
                          .then((h) => h?.replace(' in.', '').replace(' in', ''))
                          .then((h) => h && toNumber(h))) ?? '';
                      row.Length && (row['Length Unit'] = 'in');
                    } else {
                      row['Length Unit'] = 'ft';
                    }

                    row.Width =
                      (await specificationsContainer
                        .find(
                          { type: SELECTOR_TYPE.TEXT, value: 'idth (ft.)' },
                          { timeout: ELEMENT_TIMEOUT },
                        )
                        .then((h) => h?.next())
                        .then((h) => h?.text())
                        .then((h) => h?.replace(' ft.', '').replace(' ft', ''))
                        .then((h) => h && toNumber(h))) ?? '';
                    if (!row.Width) {
                      row.Width =
                        (await specificationsContainer
                          .find(
                            { type: SELECTOR_TYPE.TEXT, value: 'idth (in.)' },
                            { timeout: ELEMENT_TIMEOUT },
                          )
                          .then((h) => h?.next())
                          .then((h) => h?.text())
                          .then((h) => h?.replace(' in.', '').replace(' in', ''))
                          .then((h) => h && toNumber(h))) ?? '';
                      row.Width && (row['Width Unit'] = 'in');
                    } else {
                      row['Width Unit'] = 'ft';
                    }

                    row.Thickness =
                      (await specificationsContainer
                        .find(
                          { type: SELECTOR_TYPE.TEXT, value: 'hickness (ft.)' },
                          { timeout: ELEMENT_TIMEOUT },
                        )
                        .then((h) => h?.next())
                        .then((h) => h?.text())
                        .then((h) => h?.replace(' ft.', '').replace(' ft', ''))
                        .then((h) => h && toNumber(h))) ?? '';
                    if (!row.Thickness) {
                      row.Thickness =
                        (await specificationsContainer
                          .find(
                            { type: SELECTOR_TYPE.TEXT, value: 'hickness (in.)' },
                            { timeout: ELEMENT_TIMEOUT },
                          )
                          .then((h) => h?.next())
                          .then((h) => h?.text())
                          .then((h) => h?.replace(' in.', '').replace(' in', ''))
                          .then((h) => h && toNumber(h))) ?? '';
                      row.Thickness && (row['Thickness Unit'] = 'in');
                    } else {
                      row['Thickness Unit'] = 'ft';
                    }

                    row['Variant Weight'] =
                      (await specificationsContainer
                        .find(
                          { type: SELECTOR_TYPE.TEXT, value: 'eight (lb.)' },
                          { timeout: ELEMENT_TIMEOUT },
                        )
                        .then((h) => h?.next())
                        .then((h) => h?.text())
                        .then((h) => h?.replace(' lb.', '').replace(' lb', ''))
                        .then((h) => h && toNumber(h))) ?? '';
                    row['Variant Weight'] && (row['Variant Weight Unit'] = 'lb');
                  }

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
                      row.URL = urlF;
                      const rowToAdd = i > 1 ? { Handle: row.Handle } : row;
                      rowToAdd['Image Src'] = src;
                      rowToAdd['Image Position'] = i;
                      result.push(rowToAdd);
                      i++;
                    }
                  }

                  if (result) {
                    let headersAll = result.map((row) => Object.keys(row));
                    headersAll = sortBy(headersAll, (v) => -1 * v.length);
                    const [headers, ..._] = headersAll;
                    resultF = [
                      headers,
                      ...result.map((row) => headers.map((h) => `${row[h] as string}`)),
                    ];
                    writeFile({
                      filename: fromWorking('result.csv'),
                      value: csv(resultF),
                    });
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
      });
    },
  ],
};

export default crawl;
