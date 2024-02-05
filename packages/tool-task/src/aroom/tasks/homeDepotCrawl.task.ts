import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { writeFile } from '@lib/backend/file/utils/writeFile/writeFile';
import { slug } from '@lib/shared/core/utils/slug/slug';
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
                  if (tags) {
                    const [category, ...tagsF] = tags;
                    row['Product Category'] = category;
                    tagsF && (row.Tags = `"${tagsF.join(',')}"`);
                  }

                  // title
                  row.Title = await screen
                    .find({
                      key: 'data-component',
                      type: SELECTOR_TYPE.DATA,
                      value: 'ProductDetailsTitle',
                    })
                    .then((h) => h?.find({ value: 'h1' }).then((h) => h?.text()));
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
                    row['Variant Price'] = toNumber(`${dollar ?? 0}.${cent ?? 0}`);
                  }

                  const specificationsContainer = await screen.find({ value: '.specifications' });
                  if (specificationsContainer) {
                    // dimensions
                    row.Length = await specificationsContainer
                      .find({ type: SELECTOR_TYPE.TEXT, value: 'Length (in.)' })
                      .then((h) => h?.next())
                      .then((h) => h?.text())
                      .then((h) => h?.replace(' in.', '').replace(' in', ''))
                      .then((h) => toNumber(h));
                    if (!row.Length) {
                      row.Length = await specificationsContainer
                        .find({ type: SELECTOR_TYPE.TEXT, value: 'Length (ft.)' })
                        .then((h) => h?.next())
                        .then((h) => h?.text())
                        .then((h) => h?.replace(' ft.', '').replace(' ft', ''))
                        .then((h) => toNumber(h));
                      row.Length && (row['Length Unit'] = 'ft');
                    } else {
                      row['Length Unit'] = 'in';
                    }

                    row.Width = await specificationsContainer
                      .find({ type: SELECTOR_TYPE.TEXT, value: 'Width (in.)' })
                      .then((h) => h?.next())
                      .then((h) => h?.text())
                      .then((h) => h?.replace(' in.', '').replace(' in', ''))
                      .then((h) => toNumber(h));
                    if (!row.Width) {
                      row.Width = await specificationsContainer
                        .find({ type: SELECTOR_TYPE.TEXT, value: 'Width (ft.)' })
                        .then((h) => h?.next())
                        .then((h) => h?.text())
                        .then((h) => h?.replace(' ft.', '').replace(' ft', ''))
                        .then((h) => toNumber(h));
                      row.Width && (row['Width Unit'] = 'ft');
                    } else {
                      row['Width Unit'] = 'in';
                    }

                    row.Thickness = await specificationsContainer
                      .find({ type: SELECTOR_TYPE.TEXT, value: 'Thickness (in.)' })
                      .then((h) => h?.next())
                      .then((h) => h?.text())
                      .then((h) => h?.replace(' in.', '').replace(' in', ''))
                      .then((h) => toNumber(h));
                    if (!row.Thickness) {
                      row.Thickness = await specificationsContainer
                        .find({ type: SELECTOR_TYPE.TEXT, value: 'Thickness (ft.)' })
                        .then((h) => h?.next())
                        .then((h) => h?.text())
                        .then((h) => h?.replace(' ft.', '').replace(' ft', ''))
                        .then((h) => toNumber(h));
                      row.Thickness && (row['Thickness Unit'] = 'ft');
                    } else {
                      row['Thickness Unit'] = 'in';
                    }

                    row['Variant Weight'] = await specificationsContainer
                      .find({ type: SELECTOR_TYPE.TEXT, value: 'Weight (lb.)' })
                      .then((h) => h?.next())
                      .then((h) => h?.text())
                      .then((h) => h?.replace(' lb.', '').replace(' lb', ''))
                      .then((h) => toNumber(h));
                    row['Variant Weight'] && (row['Variant Weight Unit'] = 'lb');
                  }

                  // images
                  const thumbnail = await screen.find({ value: '.mediagallery__imgblock' });
                  if (thumbnail) {
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
                    row['Image Src'] = src;
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
