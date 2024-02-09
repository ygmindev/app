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
import toNumber from 'lodash/toNumber';

const ELEMENT_TIMEOUT = 7000;

const crawl: TaskParamsModel<unknown> = {
  name: 'home-depot-crawl',

  task: [
    async () => {
      await withScreen(async (screen) => {
        const result: Array<Record<string, unknown>> = [];
        let resultF: Array<Array<string>> = [];

        const categories = [
          'https://www.homedepot.com/b/Building-Materials/N-5yc1vZaqnsZbwo5l?NCNI-5&sortorder=desc&sortby=topsellers',
          'https://www.homedepot.com/b/Hardware-Fasteners/N-5yc1vZc255?catStyle=ShowProducts&sortorder=desc&sortby=topsellers',
          'https://www.homedepot.com/b/Paint-Paint-Supplies-Tape/N-5yc1vZc5dk?sortorder=desc&sortby=topsellers',
          'https://www.homedepot.com/b/Tools/N-5yc1vZc1xy?catStyle=ShowProducts&sortorder=desc&sortby=topsellers',
          'https://www.homedepot.com/b/Lumber-Composites/N-5yc1vZbqpg?catStyle=ShowProducts&NCNI-5&searchRedirect=lumber&semanticToken=k27r10r00f22000000000e_202402090359488677805831880_us-east4-6fkc%20k27r10r00f22000000000e%20%3E%20st%3A%7Blumber%7D%3Ast%20ml%3A%7B24%7D%3Aml%20nr%3A%7Blumber%7D%3Anr%20nf%3A%7Bn%2Fa%7D%3Anf%20qu%3A%7Blumber%7D%3Aqu%20ie%3A%7B0%7D%3Aie%20qr%3A%7Blumber%7D%3Aqr&sortorder=desc&sortby=topsellers',
          'https://www.homedepot.com/b/Paint/N-5yc1vZar2d?catStyle=ShowProducts&sortorder=desc&sortby=topsellers',
          'https://www.homedepot.com/b/Flooring/N-5yc1vZaq7r?catStyle=ShowProducts&sortorder=desc&sortby=topsellers',
        ];

        const pageIndices = range(0, 10);
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
                    const priceContainer = await screen.find({
                      value: '.price-format__main-price',
                    });
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
                          .then((h) => h && toNumber(eval(h)))) ?? '';
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
                            .then((h) => h && toNumber(eval(h)))) ?? '';
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
                          .then((h) => h && toNumber(eval(h)))) ?? '';
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
                            .then((h) => h && toNumber(eval(h)))) ?? '';
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
                          .then((h) => h && toNumber(eval(h)))) ?? '';
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
                            .then((h) => h && toNumber(eval(h)))) ?? '';
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
                          .then((h) => h && toNumber(eval(h)))) ?? '';
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
        }
      });
    },
  ],
};

export default crawl;
