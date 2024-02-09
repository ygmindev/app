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
import uniq from 'lodash/uniq';

const ELEMENT_TIMEOUT = 7000;

const crawl: TaskParamsModel<unknown> = {
  name: 'home-depot-crawl',

  task: [
    async () => {
      await withScreen(async (screen) => {
        const result: Array<Record<string, unknown>> = [];
        let resultF: Array<Array<string>> = [];

        const categories = [
          // [
          //   'https://www.homedepot.com/b/Lumber-Composites-Plywood-Sheathing-Plywood/N-5yc1vZc7q5?sortorder=desc&sortby=topsellers',
          //   '',
          // ],
          // [
          //   'https://www.homedepot.com/b/Lumber-Composites-Plywood-Hardwood-Plywood/N-5yc1vZc7r1?sortorder=desc&sortby=topsellers',
          //   '',
          // ],
          // [
          //   'https://www.homedepot.com/b/Lumber-Composites-Plywood-Oriented-Strand-Board-OSB/N-5yc1vZbqpq?sortorder=desc&sortby=topsellers',
          //   '',
          // ],
          // [
          //   'https://www.homedepot.com/b/Lumber-Composites-Timber/N-5yc1vZbym5?sortorder=desc&sortby=topsellers',
          //   'Timber',
          // ],
          // [
          //   'https://www.homedepot.com/b/Lumber-Composites-Decking-Deck-Boards-Wood-Decking-Boards/Pressure-Treated/N-5yc1vZc80mZ1z0n5mi?sortorder=desc&sortby=topsellers',
          //   '',
          // ],
          // [
          //   'https://www.homedepot.com/b/Lumber-Composites-Decking-Deck-Stairs-Outdoor-Stair-Stringers/N-5yc1vZbqlk?sortorder=desc&sortby=topsellers',
          //   'Stringers',
          // ],
          // [
          //   'https://www.homedepot.com/b/Lumber-Composites-Decking-Deck-Railings-Balusters-Spindles/Pressure-Treated/N-5yc1vZc5q0Z1z0n5mi?sortorder=desc&sortby=topsellers',
          //   '',
          // ],
          // [
          //   'https://www.homedepot.com/b/Lumber-Composites-Pressure-Treated-Lumber/2-in-x-4-in/N-5yc1vZc3srZ1z0n4we?sortorder=desc&sortby=topsellers',
          //   '',
          // ],
          // [
          //   'https://www.homedepot.com/b/Lumber-Composites-Pressure-Treated-Lumber/2-in-x-6-in/N-5yc1vZc3srZ1z0n4w1?sortorder=desc&sortby=topsellers',
          //   '',
          // ],
          // [
          //   'https://www.homedepot.com/b/Lumber-Composites-Pressure-Treated-Lumber/2-in-x-10-in/N-5yc1vZc3srZ1z0n4uq?sortorder=desc&sortby=topsellers',
          //   '',
          // ],
          // [
          //   'https://www.homedepot.com/b/Lumber-Composites-Timber/4-in/6-in/N-5yc1vZ2fkp9hkZ1z1rkokZ1z1sonl?sortorder=desc&sortby=topsellers',
          //   '',
          // ],

          // [
          //   'https://www.homedepot.com/b/Lumber-Composites-Plywood-Project-Panels/N-5yc1vZc7hm?sortorder=desc&sortby=topsellers',
          //   '',
          // ],
          // [
          //   'https://www.homedepot.com/b/Lumber-Composites-Pressure-Treated-Lumber/2-in-x-10-in/2-in-x-6-in/2-in-x-8-in/N-5yc1vZc3srZ1z0n4uqZ1z0n4w1Z1z0n4w4?NCNI-5&sortorder=desc&sortby=topsellers',
          //   'Joist',
          // ],
          // [
          //   'https://www.homedepot.com/b/Hardware-Fasteners/N-5yc1vZc255?catStyle=ShowProducts&sortorder=desc&sortby=topsellers',
          //   '',
          // ],
          // [
          //   'https://www.homedepot.com/b/Building-Materials/N-5yc1vZaqnsZbwo5l?NCNI-5&sortorder=desc&sortby=topsellers',
          //   '',
          // ],
          // [
          //   'https://www.homedepot.com/b/Paint/N-5yc1vZar2d?catStyle=ShowProducts&sortorder=desc&sortby=topsellers',
          //   '',
          // ],
          // [
          //   'https://www.homedepot.com/b/Tools/N-5yc1vZc1xy?catStyle=ShowProducts&sortorder=desc&sortby=topsellers',
          //   '',
          // ],
          // [
          //   'https://www.homedepot.com/b/Paint-Paint-Supplies-Tape/N-5yc1vZc5dk?sortorder=desc&sortby=topsellers',
          //   '',
          // ],
          // [
          //   'https://www.homedepot.com/b/Flooring/N-5yc1vZaq7r?catStyle=ShowProducts&sortorder=desc&sortby=topsellers',
          //   '',
          // ],
          // [
          //   'https://www.homedepot.com/b/Lumber-Composites-Boards-Planks-Panels/N-5yc1vZ1z18h41?sortorder=desc&sortby=topsellers',
          //   '',
          // ],

          [
            'https://www.homedepot.com/b/Hardware-Fasteners/N-5yc1vZc255?catStyle=ShowProducts&sortorder=desc&sortby=topsellers',
            '',
          ],
          [
            'https://www.homedepot.com/b/Lumber-Composites-Fencing-Gates/N-5yc1vZbrk7?sortorder=desc&sortby=topsellers',
            '',
          ],
          [
            'https://www.homedepot.com/b/Building-Materials-Building-Hardware/N-5yc1vZaqzs?sortorder=desc&sortby=topsellers',
            '',
          ],
        ];

        const pageIndices = range(0, 10);
        for (const index of pageIndices) {
          for (const [category, extraTag] of categories) {
            console.warn(`### PAGE: ${index}, CATEGORY: ${category}`);
            try {
              await screen.open(`${category}&Nao=${index * 24}`);

              await sleep(3000);

              await screen
                .find({ value: '.results-layout__toggle-grid' }, { timeout: ELEMENT_TIMEOUT })
                .then((h) => h?.press());

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
                      try {
                        await accordion.press();
                      } catch (e) {}
                    }

                    // category
                    let tags = [];
                    const categories = await screen
                      .findAll({ value: '.breadcrumb__item a' })
                      .then((handles) => handles.map((h) => h?.text()));
                    for (const category of categories) {
                      const categoryF = await category;
                      categoryF && categoryF !== 'Home' && tags.push(categoryF);
                    }
                    extraTag && tags.push(extraTag);
                    tags = uniq(tags);
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
                    // description
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
                        row.Page = index + 1;
                        row.Category = category;
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
