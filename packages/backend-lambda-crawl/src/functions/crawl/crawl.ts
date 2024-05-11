// import { S3Client } from '@aws-sdk/client-s3';
// import { Upload } from '@aws-sdk/lib-storage';
import { createLambdaHandler } from '@lib/backend/serverless/utils/createLambdaHandler/createLambdaHandler';
import { ConcurrentQueue } from '@lib/shared/core/utils/ConcurrentQueue/ConcurrentQueue';
import { runWithRetry } from '@lib/shared/core/utils/runWithRetry/runWithRetry';
import { slug } from '@lib/shared/core/utils/slug/slug';
import { Screen } from '@lib/shared/crawling/utils/Screen/Screen';
import { SELECTOR_TYPE } from '@lib/shared/crawling/utils/withScreen/withScreen.constants';
import { HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';
import { info } from '@lib/shared/logging/utils/logger/logger';
import { JWT } from 'google-auth-library';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import toNumber from 'lodash/toNumber';
import trimStart from 'lodash/trimStart';
import uniq from 'lodash/uniq';

let screen: Screen;

export const main = createLambdaHandler<{
  category: string;
  link: string;
  maxItems?: number;
  pageIndex?: number;
  start?: number;
}>({
  handler: async ({ body }) => {
    if (!screen) {
      screen = new Screen();
      await screen.initialize();
    }

    const { link } = body ?? {};
    const maxItems = body?.maxItems ? toNumber(body?.maxItems) : 100;
    const pageIndex = body?.pageIndex ? toNumber(body?.pageIndex) : 0;
    const start = body?.start ? toNumber(body?.start) : 0;
    const category = body?.category ?? '';

    const PAGE_SIZE = 24;
    const UPLOAD_SIZE = 3;
    const COLUMNS = [
      'Tags',
      'Product title',
      'Vendor',
      'Product description',
      'Handle',
      'Product status',
      'Product URL',
      'Price',
      'Compare at price',
      'Cost per item',
      'Weight',
      'Weight unit',
      'Meta Field DimensionDepth',
      'Meta Field DimensionLength',
      'Meta Field DimensionWidth',
      'Meta Field Search product boosts',
      'Image URL',
      'Images alt text',
      'Image URL #2',
      'Images alt text #2',
      'Image URL #3',
      'Images alt text #3',
      'Image URL #4',
      'Images alt text #4',
      'Image URL #5',
      'Images alt text #5',
      'SKU (Stock Keeping Unit)',
      'Barcode (ISBN, UPC, GTIN, etc.)',
      'Date created',
      'Date updated',
      'Page',
      'Meta Field Related products settings',
      'Meta Field Complementary products',
      'Name of the collections 1',
      'Name of the collections 2',
      'Name of the collections 3',
      'Name of the collections 4',
      'Name of the collections 5',
      'ID of the collections 1',
      'ID of the collections 2',
      'ID of the collections 3',
      'ID of the collections 4',
      'ID of the collections 5',
      'Product Type',
      'Product Category ID',
      'Product Category Full Name',
      'Page title',
      'Description',
      'Variant image alt',
      'Quantity',
      'Available For Sale',
      'Tax code',
      'Source URL',
      'Source Page',
      'Source Index',
    ];

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
            const valueF = value.map((row) => ({
              ...row,
              ['Date created']: new Date().toLocaleString(),
            }));
            await sheet.addRows(valueF);
            await sheet.saveUpdatedCells();
          }
        },
        { delay: 1000, retries: 100 },
      );

    let result: Array<Record<string, string | number>> = [];

    let count = start + 1;

    try {
      await screen.open('https://www.homedepot.com/l/Falls-Church/VA/Falls-Church/22044/4608');

      console.warn(`@@@ACCESS: ${process.env.AWS_ACCESS_KEY_ID}`);
      // const file = await screen.snapshot({ filename: 'location' });
      // await new Upload({
      //   client: new S3Client({
      //     credentials: {
      //       accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      //       secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      //     },
      //     region: process.env.SERVER_REGION,
      //   }),
      //   params: {
      //     Body: file,
      //     Bucket: 'aroom-static',
      //     ContentEncoding: 'base64',
      //     ContentType: 'image/png',
      //     Key: 'location.png',
      //   },
      // }).done();

      await screen
        .find({ key: 'data-testid', type: SELECTOR_TYPE.DATA, value: 'store-pod-localize__button' })
        .then((h) => h?.press());

      await screen.open(`${link}${pageIndex > 0 ? `&Nao=${pageIndex * PAGE_SIZE}` : ''}`);
      await screen.find({ value: '.results-layout__toggle-grid' }).then((h) => h?.press());
      await screen
        .find({ type: SELECTOR_TYPE.TEXT, value: 'Show Unavailable Products' })
        .then((h) => h?.parent())
        .then((h) => h?.parent())
        .then((h) => h?.press());

      const resultContainer = await screen.find({ value: '.results-wrapped' });
      const urls = resultContainer
        ? await Promise.all(
            await resultContainer
              .findAll({ key: 'data-testid', type: SELECTOR_TYPE.DATA, value: 'product-pod' })
              .then((handles) => handles?.map((h) => h.find({ value: 'a' }).then((h) => h?.url()))),
          )
        : [];

      for (const url of start ? urls.slice(start) : urls) {
        if (maxItems && count > maxItems) {
          break;
        }

        try {
          if (url?.startsWith('https://www.homedepot.com')) {
            const itemQueue = new ConcurrentQueue();
            const row: Record<string, unknown> = {};
            COLUMNS.forEach((column) => (row[column] = ''));
            row['Product Category Full Name'] = category;
            row['Source URL'] = url;
            row['Source Page'] = pageIndex + 1;
            row['Source Index'] = count;

            await runWithRetry(async () => screen.open(url), { delay: 1000, retries: 5 });

            await screen.find({ value: '.product-section-overview' }).then((h) => h?.press());
            await screen.find({ value: '.product-section-key-feat' }).then((h) => h?.press());

            // category
            itemQueue.add(async () => {
              let tags = [];
              const categories = await screen
                .findAll({ value: '.breadcrumb__item' })
                .then((handles) =>
                  handles.map((h) => h?.find({ value: 'a' }).then((h) => h?.text())),
                );
              for (const c of categories) {
                const categoryF = await c;
                categoryF && categoryF !== 'Home' && tags.push(categoryF);
              }
              tags = uniq(tags);
              row.Tags = tags ? tags.join(',') : '';
            });

            // brand
            itemQueue.add(async () => {
              row.Vendor =
                (await screen
                  .find({ value: '.sticky-nav__brand--container' })
                  .then((h) => h?.find({ value: '.brand' }))
                  .then((h) => h?.text())) ?? '';
            });

            // title
            itemQueue.add(async () => {
              row['Product title'] =
                (await screen
                  .find({
                    key: 'data-component',
                    type: SELECTOR_TYPE.DATA,
                    value: 'ProductDetailsTitle',
                  })
                  .then((h) => h?.text())) ?? '';
              row['Product title'] && (row.Handle = slug(row['Product title'] as string));
            });

            const descriptionsContainer = await screen.find({
              key: 'data-testid',
              type: SELECTOR_TYPE.DATA,
              value: 'product-overview-desktop',
            });

            // description
            if (descriptionsContainer) {
              itemQueue.add(async () => {
                row['Product description'] = await descriptionsContainer
                  .find({ value: '.sui-flex-col' })
                  .then((h) => h?.find({ value: '.sui-w-full' }))
                  .then((h) => h?.content());

                if (row['Product description']) {
                  // const productInfo = await descriptionsContainer
                  //   .find({ key: 'data-testid', type: SELECTOR_TYPE.DATA, value: 'productInfo' })
                  //   .then((h) => h?.content());
                  // if (productInfo) {
                  //   row['Product description'] = (row['Product description'] as string).replace(
                  //     productInfo,
                  //     '',
                  //   );
                  // }
                  row['Product description'] = (row['Product description'] as string).replace(
                    /<a\b[^>]*>(.*?)<\/a>/i,
                    '',
                  );
                  // .replace(/<h3.*>Product Information<\/h3>/i, '');
                }
              });
            }

            // price
            itemQueue.add(async () => {
              const priceContainer = await screen.find({ value: '.price-format__main-price' });
              if (priceContainer) {
                const spans = await priceContainer.findAll({ value: 'span' });
                const dollar = await spans[1]?.text();
                const cent = await spans[3]?.text();
                row['Cost per item'] = toNumber(`${dollar ?? 0}.${cent ?? 0}`);
              }
            });

            // ids
            itemQueue.add(async () => {
              row['SKU (Stock Keeping Unit)'] = await screen
                .find({ type: SELECTOR_TYPE.TEXT, value: 'Store SKU #' })
                .then((h) => h?.find({ value: 'span' }).then((h) => h?.content()));
            });
            itemQueue.add(async () => {
              row['Barcode (ISBN, UPC, GTIN, etc.)'] = await screen
                .find({ type: SELECTOR_TYPE.TEXT, value: 'Model #' })
                .then((h) => h?.find({ value: 'span' }).then((h) => h?.content()));
            });

            const specificationsContainer = await screen.find({
              value: '#product-section-specifications',
            });
            if (specificationsContainer) {
              // dimensions
              itemQueue.add(async () => {
                const v = await specificationsContainer
                  .find({ type: SELECTOR_TYPE.TEXT, value: 'ength (ft' })
                  .then((h) => h?.parent())
                  .then((h) => h?.next())
                  .then((h) => h?.text())
                  .then((h) => h?.replace(' ft.', '').replace(' ft', ''))
                  .then((h) => h && toNumber(trimStart(eval(h) as string, '0')));
                if (v) {
                  row['Meta Field DimensionLength'] = JSON.stringify({ unit: 'ft', value: v });
                }
              });

              itemQueue.add(async () => {
                const v = await specificationsContainer
                  .find({ type: SELECTOR_TYPE.TEXT, value: 'ength (in' })
                  .then((h) => h?.parent())
                  .then((h) => h?.next())
                  .then((h) => h?.text())
                  .then((h) => h?.replace(' in.', '').replace(' in', ''))
                  .then((h) => h && toNumber(trimStart(eval(h) as string, '0')));
                if (v) {
                  row['Meta Field DimensionLength'] = JSON.stringify({ unit: 'in', value: v });
                }
              });

              itemQueue.add(async () => {
                const v = await specificationsContainer
                  .find({ type: SELECTOR_TYPE.TEXT, value: 'idth (ft' })
                  .then((h) => h?.parent())
                  .then((h) => h?.next())
                  .then((h) => h?.text())
                  .then((h) => h?.replace(' ft.', '').replace(' ft', ''))
                  .then((h) => h && toNumber(trimStart(eval(h) as string, '0')));
                if (v) {
                  row['Meta Field DimensionWidth'] = JSON.stringify({ unit: 'ft', value: v });
                }
              });

              itemQueue.add(async () => {
                const v = await specificationsContainer
                  .find({ type: SELECTOR_TYPE.TEXT, value: 'idth (in' })
                  .then((h) => h?.parent())
                  .then((h) => h?.next())
                  .then((h) => h?.text())
                  .then((h) => h?.replace(' in.', '').replace(' in', ''))
                  .then((h) => h && toNumber(trimStart(eval(h) as string, '0')));
                if (v) {
                  row['Meta Field DimensionWidth'] = JSON.stringify({ unit: 'in', value: v });
                }
              });

              itemQueue.add(async () => {
                const v = await specificationsContainer
                  .find({ type: SELECTOR_TYPE.TEXT, value: 'hickness (ft' })
                  .then((h) => h?.parent())
                  .then((h) => h?.next())
                  .then((h) => h?.text())
                  .then((h) => h?.replace(' ft.', '').replace(' ft', ''))
                  .then((h) => h && toNumber(trimStart(eval(h) as string, '0')));
                if (v) {
                  row['Meta Field DimensionDepth'] = JSON.stringify({ unit: 'ft', value: v });
                }
              });

              itemQueue.add(async () => {
                const v = await specificationsContainer
                  .find({ type: SELECTOR_TYPE.TEXT, value: 'hickness (in' })
                  .then((h) => h?.parent())
                  .then((h) => h?.next())
                  .then((h) => h?.text())
                  .then((h) => h?.replace(' in.', '').replace(' in', ''))
                  .then((h) => h && toNumber(trimStart(eval(h) as string, '0')));
                if (v) {
                  row['Meta Field DimensionDepth'] = JSON.stringify({ unit: 'in', value: v });
                }
              });

              itemQueue.add(async () => {
                const v = await specificationsContainer
                  .find({ type: SELECTOR_TYPE.TEXT, value: 'eight (grams' })
                  .then((h) => h?.parent())
                  .then((h) => h?.next())
                  .then((h) => h?.text())
                  .then((h) => h?.replace(' grams', ''))
                  .then((h) => h && toNumber(trimStart(eval(h) as string, '0')));
                if (v) {
                  row['Weight'] = v;
                  row['Weight unit'] = 'grams';
                }
              });

              itemQueue.add(async () => {
                const v = await specificationsContainer
                  .find({ type: SELECTOR_TYPE.TEXT, value: 'eight (lb' })
                  .then((h) => h?.parent())
                  .then((h) => h?.next())
                  .then((h) => h?.text())
                  .then((h) => h?.replace(' lb.', '').replace(' lb', ''))
                  .then((h) => h && toNumber(trimStart(eval(h) as string, '0')));
                if (v) {
                  row['Weight'] = v;
                  row['Weight unit'] = 'pounds';
                }
              });
            }

            // stock
            itemQueue.add(async () => {
              const stockContainer = await screen.find({ value: '.buybox-wrapper' });
              const pickupContainer = await stockContainer
                ?.find({ type: SELECTOR_TYPE.TEXT, value: 'Pickup' })
                .then((h) => h?.parent())
                .then((h) => h?.parent());
              const deliveryContainer = await stockContainer
                ?.find({ type: SELECTOR_TYPE.TEXT, value: 'Delivery' })
                .then((h) => h?.parent())
                .then((h) => h?.parent());

              const today = !!(await pickupContainer?.find({
                type: SELECTOR_TYPE.TEXT,
                value: 'Today',
              }));
              const shipToStore = !!(await pickupContainer?.find({
                type: SELECTOR_TYPE.TEXT,
                value: 'Ship to Store',
              }));
              const atYourStore = !!(await pickupContainer?.find({
                type: SELECTOR_TYPE.TEXT,
                value: 'At Your Store',
              }));
              const pickupUnavailable = !!(await pickupContainer?.find({
                type: SELECTOR_TYPE.TEXT,
                value: 'Unavailable',
              }));
              const deliveryUnavailable = !!(await deliveryContainer?.find({
                type: SELECTOR_TYPE.TEXT,
                value: 'Unavailable',
              }));

              row['Available For Sale'] =
                today && !deliveryUnavailable
                  ? 'Available'
                  : shipToStore
                    ? 'Case 2'
                    : atYourStore
                      ? 'Case 1'
                      : !pickupUnavailable && deliveryUnavailable
                        ? 'Available 2'
                        : pickupUnavailable && !deliveryUnavailable
                          ? 'Case 3'
                          : pickupUnavailable && deliveryUnavailable
                            ? 'Out of Stock'
                            : '';
            });

            await itemQueue.run();

            // images
            const thumbnails = await screen.findAll({ value: '.mediagallery__imgblock' });
            let i = 1;
            for (const thumbnail of thumbnails) {
              if (i <= 5) {
                await thumbnail.press();
                const src = await screen
                  .find({ value: '.mediagallery__mainimage' })
                  .then((h) => h?.find({ value: 'img' }))
                  .then((h) => h?.src());

                if (src) {
                  row[i > 1 ? `Image URL #${i}` : 'Image URL'] = src;
                  i++;
                }
              }
            }
            result.push(row as Record<string, string | number>);
            info(`Adding item: ${url}`);

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
    }

    if (result.length > 0) {
      await upload(result);
      result = [];
    }

    return {
      body: { message: 'success' },
      headers: { 'Access-Control-Allow-Origin': '*' },
      statusCode: HTTP_STATUS_CODE.SUCCESS,
    };
  },
});

// import { createLambdaHandler } from '@lib/backend/serverless/utils/createLambdaHandler/createLambdaHandler';
// import { ConcurrentQueue } from '@lib/shared/core/utils/ConcurrentQueue/ConcurrentQueue';
// import { runWithRetry } from '@lib/shared/core/utils/runWithRetry/runWithRetry';
// import { sleep } from '@lib/shared/core/utils/sleep/sleep';
// import { slug } from '@lib/shared/core/utils/slug/slug';
// import { withScreen } from '@lib/shared/crawling/utils/withScreen/withScreen';
// import { SELECTOR_TYPE } from '@lib/shared/crawling/utils/withScreen/withScreen.constants';
// import { HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';
// import { info } from '@lib/shared/logging/utils/logger/logger';
// import { JWT } from 'google-auth-library';
// import { GoogleSpreadsheet } from 'google-spreadsheet';
// import toNumber from 'lodash/toNumber';
// import trimStart from 'lodash/trimStart';
// import uniq from 'lodash/uniq';

// export const main = createLambdaHandler<{
//   category: string;
//   link: string;
//   maxItems?: number;
//   pageIndex?: number;
//   start?: number;
// }>({
//   handler: async ({ body }) => {
//     const { link } = body ?? {};
//     const maxItems = body?.maxItems ? toNumber(body?.maxItems) : 100;
//     const pageIndex = body?.pageIndex ? toNumber(body?.pageIndex) : 0;
//     const start = body?.start ? toNumber(body?.start) : 0;
//     const category = body?.category ?? '';

//     const PAGE_SIZE = 24;
//     const UPLOAD_SIZE = 3;
//     const COLUMNS = [
//       'Tags',
//       'Product title',
//       'Vendor',
//       'Product description',
//       'Handle',
//       'Product status',
//       'Product URL',
//       'Price',
//       'Compare at price',
//       'Cost per item',
//       'Weight',
//       'Weight unit',
//       'Meta Field DimensionDepth',
//       'Meta Field DimensionLength',
//       'Meta Field DimensionWidth',
//       'Meta Field Search product boosts',
//       'Image URL',
//       'Images alt text',
//       'Image URL #2',
//       'Images alt text #2',
//       'Image URL #3',
//       'Images alt text #3',
//       'Image URL #4',
//       'Images alt text #4',
//       'Image URL #5',
//       'Images alt text #5',
//       'SKU (Stock Keeping Unit)',
//       'Barcode (ISBN, UPC, GTIN, etc.)',
//       'Date created',
//       'Date updated',
//       'Page',
//       'Meta Field Related products settings',
//       'Meta Field Complementary products',
//       'Name of the collections 1',
//       'Name of the collections 2',
//       'Name of the collections 3',
//       'Name of the collections 4',
//       'Name of the collections 5',
//       'ID of the collections 1',
//       'ID of the collections 2',
//       'ID of the collections 3',
//       'ID of the collections 4',
//       'ID of the collections 5',
//       'Product Type',
//       'Product Category ID',
//       'Product Category Full Name',
//       'Page title',
//       'Description',
//       'Variant image alt',
//       'Quantity',
//       'Available For Sale',
//       'Tax code',
//       'Source URL',
//       'Source Page',
//       'Source Index',
//     ];

//     const auth = new JWT({
//       email: process.env.SERVER_GOOGLE_EMAIL,
//       key: process.env.SERVER_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
//       scopes: [
//         'https://www.googleapis.com/auth/spreadsheets',
//         'https://www.googleapis.com/auth/drive.file',
//       ],
//     });
//     const doc = new GoogleSpreadsheet('1Y50rGvzXzPNcnDjm4xkJ1AnxKIYsKBaooeraCpankiw', auth);
//     await doc.loadInfo();
//     const [sheet] = doc.sheetsByIndex;

//     const upload = async (value: Array<Record<string, string | number>>): Promise<void> =>
//       runWithRetry(
//         async () => {
//           if (value) {
//             const valueF = value.map((row) => ({
//               ...row,
//               ['Date created']: new Date().toLocaleString(),
//             }));
//             await sheet.addRows(valueF);
//             await sheet.saveUpdatedCells();
//           }
//         },
//         { delay: 1000, retries: 100 },
//       );

//     await withScreen(async (screen) => {
//       let result: Array<Record<string, string | number>> = [];

//       let count = start + 1;

//       try {
//         await screen.open('https://www.homedepot.com/l/Falls-Church/VA/Falls-Church/22044/4608');
//         await screen
//           .find({
//             key: 'data-testid',
//             type: SELECTOR_TYPE.DATA,
//             value: 'store-pod-localize__button',
//           })
//           .then((h) => h?.press());

//         await sleep(5000);

//         await screen.open(`${link}${pageIndex > 0 ? `&Nao=${pageIndex * PAGE_SIZE}` : ''}`);

//         await screen.find({ value: '.results-layout__toggle-grid' }).then((h) => h?.press());

//         const resultContainer = await screen.find({ value: '.results-wrapped' });
//         const urls = resultContainer
//           ? await Promise.all(
//               await resultContainer
//                 .findAll({ key: 'data-testid', type: SELECTOR_TYPE.DATA, value: 'product-pod' })
//                 .then((handles) =>
//                   handles?.map((h) => h.find({ value: 'a' }).then((h) => h?.url())),
//                 ),
//             )
//           : [];

//         for (const url of start ? urls.slice(start) : urls) {
//           if (maxItems && count > maxItems) {
//             break;
//           }

//           try {
//             if (url?.startsWith('https://www.homedepot.com')) {
//               const itemQueue = new ConcurrentQueue();
//               const row: Record<string, unknown> = {};
//               COLUMNS.forEach((column) => (row[column] = ''));
//               row['Product Category Full Name'] = category;
//               row['Source URL'] = url;
//               row['Source Page'] = pageIndex + 1;
//               row['Source Index'] = count;

//               await runWithRetry(async () => screen.open(url), { delay: 1000, retries: 5 });

//               await screen.find({ value: '.product-section-overview' }).then((h) => h?.press());
//               await screen.find({ value: '.product-section-key-feat' }).then((h) => h?.press());

//               // category
//               itemQueue.add(async () => {
//                 let tags = [];
//                 const categories = await screen
//                   .findAll({ value: '.breadcrumb__item' })
//                   .then((handles) =>
//                     handles.map((h) => h?.find({ value: 'a' }).then((h) => h?.text())),
//                   );
//                 for (const c of categories) {
//                   const categoryF = await c;
//                   categoryF && categoryF !== 'Home' && tags.push(categoryF);
//                 }
//                 tags = uniq(tags);
//                 row.Tags = tags ? tags.join(',') : '';
//               });

//               // brand
//               itemQueue.add(async () => {
//                 row.Vendor =
//                   (await screen
//                     .find({ value: '.sticky-nav__brand--container' })
//                     .then((h) => h?.find({ value: '.brand' }))
//                     .then((h) => h?.text())) ?? '';
//               });

//               // title
//               itemQueue.add(async () => {
//                 row['Product title'] =
//                   (await screen
//                     .find({
//                       key: 'data-component',
//                       type: SELECTOR_TYPE.DATA,
//                       value: 'ProductDetailsTitle',
//                     })
//                     .then((h) => h?.text())) ?? '';
//                 row['Product title'] && (row.Handle = slug(row['Product title'] as string));
//               });

//               const descriptionsContainer = await screen.find({
//                 key: 'data-testid',
//                 type: SELECTOR_TYPE.DATA,
//                 value: 'product-overview-desktop',
//               });

//               // description
//               if (descriptionsContainer) {
//                 itemQueue.add(async () => {
//                   row['Product description'] = await descriptionsContainer
//                     .find({ value: '.sui-flex-col' })
//                     .then((h) => h?.find({ value: '.sui-w-full' }))
//                     .then((h) => h?.content());

//                   if (row['Product description']) {
//                     // const productInfo = await descriptionsContainer
//                     //   .find({ key: 'data-testid', type: SELECTOR_TYPE.DATA, value: 'productInfo' })
//                     //   .then((h) => h?.content());
//                     // if (productInfo) {
//                     //   row['Product description'] = (row['Product description'] as string).replace(
//                     //     productInfo,
//                     //     '',
//                     //   );
//                     // }
//                     row['Product description'] = (row['Product description'] as string).replace(
//                       /<a\b[^>]*>(.*?)<\/a>/i,
//                       '',
//                     );
//                     // .replace(/<h3.*>Product Information<\/h3>/i, '');
//                   }
//                 });
//               }

//               // price
//               itemQueue.add(async () => {
//                 const priceContainer = await screen.find({ value: '.price-format__main-price' });
//                 if (priceContainer) {
//                   const spans = await priceContainer.findAll({ value: 'span' });
//                   const dollar = await spans[1]?.text();
//                   const cent = await spans[3]?.text();
//                   row['Cost per item'] = toNumber(`${dollar ?? 0}.${cent ?? 0}`);
//                 }
//               });

//               // ids
//               itemQueue.add(async () => {
//                 row['SKU (Stock Keeping Unit)'] = await screen
//                   .find({ type: SELECTOR_TYPE.TEXT, value: 'Store SKU #' })
//                   .then((h) => h?.find({ value: 'span' }).then((h) => h?.content()));
//               });
//               itemQueue.add(async () => {
//                 row['Barcode (ISBN, UPC, GTIN, etc.)'] = await screen
//                   .find({ type: SELECTOR_TYPE.TEXT, value: 'Model #' })
//                   .then((h) => h?.find({ value: 'span' }).then((h) => h?.content()));
//               });

//               const specificationsContainer = await screen.find({
//                 value: '#product-section-specifications',
//               });
//               if (specificationsContainer) {
//                 // dimensions
//                 itemQueue.add(async () => {
//                   const v = await specificationsContainer
//                     .find({ type: SELECTOR_TYPE.TEXT, value: 'ength (ft' })
//                     .then((h) => h?.parent())
//                     .then((h) => h?.next())
//                     .then((h) => h?.text())
//                     .then((h) => h?.replace(' ft.', '').replace(' ft', ''))
//                     .then((h) => h && toNumber(trimStart(eval(h) as string, '0')));
//                   if (v) {
//                     row['Meta Field DimensionLength'] = JSON.stringify({ unit: 'ft', value: v });
//                   }
//                 });

//                 itemQueue.add(async () => {
//                   const v = await specificationsContainer
//                     .find({ type: SELECTOR_TYPE.TEXT, value: 'ength (in' })
//                     .then((h) => h?.parent())
//                     .then((h) => h?.next())
//                     .then((h) => h?.text())
//                     .then((h) => h?.replace(' in.', '').replace(' in', ''))
//                     .then((h) => h && toNumber(trimStart(eval(h) as string, '0')));
//                   if (v) {
//                     row['Meta Field DimensionLength'] = JSON.stringify({ unit: 'in', value: v });
//                   }
//                 });

//                 itemQueue.add(async () => {
//                   const v = await specificationsContainer
//                     .find({ type: SELECTOR_TYPE.TEXT, value: 'idth (ft' })
//                     .then((h) => h?.parent())
//                     .then((h) => h?.next())
//                     .then((h) => h?.text())
//                     .then((h) => h?.replace(' ft.', '').replace(' ft', ''))
//                     .then((h) => h && toNumber(trimStart(eval(h) as string, '0')));
//                   if (v) {
//                     row['Meta Field DimensionWidth'] = JSON.stringify({ unit: 'ft', value: v });
//                   }
//                 });

//                 itemQueue.add(async () => {
//                   const v = await specificationsContainer
//                     .find({ type: SELECTOR_TYPE.TEXT, value: 'idth (in' })
//                     .then((h) => h?.parent())
//                     .then((h) => h?.next())
//                     .then((h) => h?.text())
//                     .then((h) => h?.replace(' in.', '').replace(' in', ''))
//                     .then((h) => h && toNumber(trimStart(eval(h) as string, '0')));
//                   if (v) {
//                     row['Meta Field DimensionWidth'] = JSON.stringify({ unit: 'in', value: v });
//                   }
//                 });

//                 itemQueue.add(async () => {
//                   const v = await specificationsContainer
//                     .find({ type: SELECTOR_TYPE.TEXT, value: 'hickness (ft' })
//                     .then((h) => h?.parent())
//                     .then((h) => h?.next())
//                     .then((h) => h?.text())
//                     .then((h) => h?.replace(' ft.', '').replace(' ft', ''))
//                     .then((h) => h && toNumber(trimStart(eval(h) as string, '0')));
//                   if (v) {
//                     row['Meta Field DimensionDepth'] = JSON.stringify({ unit: 'ft', value: v });
//                   }
//                 });

//                 itemQueue.add(async () => {
//                   const v = await specificationsContainer
//                     .find({ type: SELECTOR_TYPE.TEXT, value: 'hickness (in' })
//                     .then((h) => h?.parent())
//                     .then((h) => h?.next())
//                     .then((h) => h?.text())
//                     .then((h) => h?.replace(' in.', '').replace(' in', ''))
//                     .then((h) => h && toNumber(trimStart(eval(h) as string, '0')));
//                   if (v) {
//                     row['Meta Field DimensionDepth'] = JSON.stringify({ unit: 'in', value: v });
//                   }
//                 });

//                 itemQueue.add(async () => {
//                   const v = await specificationsContainer
//                     .find({ type: SELECTOR_TYPE.TEXT, value: 'eight (grams' })
//                     .then((h) => h?.parent())
//                     .then((h) => h?.next())
//                     .then((h) => h?.text())
//                     .then((h) => h?.replace(' grams', ''))
//                     .then((h) => h && toNumber(trimStart(eval(h) as string, '0')));
//                   if (v) {
//                     row['Weight'] = v;
//                     row['Weight unit'] = 'grams';
//                   }
//                 });

//                 itemQueue.add(async () => {
//                   const v = await specificationsContainer
//                     .find({ type: SELECTOR_TYPE.TEXT, value: 'eight (lb' })
//                     .then((h) => h?.parent())
//                     .then((h) => h?.next())
//                     .then((h) => h?.text())
//                     .then((h) => h?.replace(' lb.', '').replace(' lb', ''))
//                     .then((h) => h && toNumber(trimStart(eval(h) as string, '0')));
//                   if (v) {
//                     row['Weight'] = v;
//                     row['Weight unit'] = 'pounds';
//                   }
//                 });
//               }

//               // stock
//               itemQueue.add(async () => {
//                 const stockContainer = await screen.find({ value: '.buybox-wrapper' });
//                 const pickupContainer = await stockContainer
//                   ?.find({ type: SELECTOR_TYPE.TEXT, value: 'Pickup' })
//                   .then((h) => h?.parent())
//                   .then((h) => h?.parent());
//                 const deliveryContainer = await stockContainer
//                   ?.find({ type: SELECTOR_TYPE.TEXT, value: 'Delivery' })
//                   .then((h) => h?.parent())
//                   .then((h) => h?.parent());

//                 const today = !!(await pickupContainer?.find({
//                   type: SELECTOR_TYPE.TEXT,
//                   value: 'Today',
//                 }));
//                 const shipToStore = !!(await pickupContainer?.find({
//                   type: SELECTOR_TYPE.TEXT,
//                   value: 'Ship to Store',
//                 }));
//                 const atYourStore = !!(await pickupContainer?.find({
//                   type: SELECTOR_TYPE.TEXT,
//                   value: 'At Your Store',
//                 }));
//                 const pickupUnavailable = !!(await pickupContainer?.find({
//                   type: SELECTOR_TYPE.TEXT,
//                   value: 'Unavailable',
//                 }));
//                 const deliveryUnavailable = !!(await deliveryContainer?.find({
//                   type: SELECTOR_TYPE.TEXT,
//                   value: 'Unavailable',
//                 }));

//                 row['Available For Sale'] =
//                   today && !deliveryUnavailable
//                     ? 'Available'
//                     : shipToStore
//                       ? 'Case 2'
//                       : atYourStore
//                         ? 'Case 1'
//                         : !pickupUnavailable && deliveryUnavailable
//                           ? 'Available 2'
//                           : pickupUnavailable && !deliveryUnavailable
//                             ? 'Case 3'
//                             : pickupUnavailable && deliveryUnavailable
//                               ? 'Out of Stock'
//                               : '';
//               });

//               await itemQueue.run();

//               // images
//               const thumbnails = await screen.findAll({ value: '.mediagallery__imgblock' });
//               let i = 1;
//               for (const thumbnail of thumbnails) {
//                 if (i <= 5) {
//                   await thumbnail.press();
//                   const src = await screen
//                     .find({ value: '.mediagallery__mainimage' })
//                     .then((h) => h?.find({ value: 'img' }))
//                     .then((h) => h?.src());

//                   if (src) {
//                     row[i > 1 ? `Image URL #${i}` : 'Image URL'] = src;
//                     i++;
//                   }
//                 }
//               }
//               result.push(row as Record<string, string | number>);
//               info(`Adding item: ${url}`);

//               if (result) {
//                 if (result.length > 0 && count % UPLOAD_SIZE === 0) {
//                   await upload(result);
//                   result = [];
//                 }
//                 count++;
//               }
//             }
//           } catch (e) {
//             console.warn(e);
//             continue;
//           }
//         }
//       } catch (e) {
//         console.warn(e);
//         return;
//       }

//       if (result.length > 0) {
//         await upload(result);
//         result = [];
//       }

//       await screen.close();
//     });

//     return {
//       body: { message: 'success' },
//       headers: { 'Access-Control-Allow-Origin': '*' },
//       statusCode: HTTP_STATUS_CODE.SUCCESS,
//     };
//   },
// });

// // import { createLambdaHandler } from '@lib/backend/serverless/utils/createLambdaHandler/createLambdaHandler';
// // import { ConcurrentQueue } from '@lib/shared/core/utils/ConcurrentQueue/ConcurrentQueue';
// // import { runWithRetry } from '@lib/shared/core/utils/runWithRetry/runWithRetry';
// // import { slug } from '@lib/shared/core/utils/slug/slug';
// // import { withScreen } from '@lib/shared/crawling/utils/withScreen/withScreen';
// // import { SELECTOR_TYPE } from '@lib/shared/crawling/utils/withScreen/withScreen.constants';
// // import { HTTP_STATUS_CODE } from '@lib/shared/http/http.constants';
// // import { info } from '@lib/shared/logging/utils/logger/logger';
// // import { JWT } from 'google-auth-library';
// // import { GoogleSpreadsheet } from 'google-spreadsheet';
// // import toNumber from 'lodash/toNumber';
// // import uniq from 'lodash/uniq';

// // export const main = createLambdaHandler<{
// //   category: string;
// //   link: string;
// //   maxItems?: number;
// //   pageIndex?: number;
// //   start?: number;
// // }>({
// //   handler: async ({ body }) => {
// //     const { category, link } = body ?? {};
// //     const maxItems = body?.maxItems ? toNumber(body?.maxItems) : 100;
// //     const pageIndex = body?.pageIndex ? toNumber(body?.pageIndex) : 0;
// //     const start = body?.start ? toNumber(body?.start) : 0;
// //     const PAGE_SIZE = 24;
// //     const UPLOAD_SIZE = 1;
// //     const ELEMENT_TIMEOUT = 8000;
// //     const COLUMNS = [
// //       'Extra',
// //       'Tags',
// //       'Vendor',
// //       'Title',
// //       'Handle',
// //       'Body (HTML)',
// //       'Cost per Item',
// //       'Length',
// //       'Length Unit',
// //       'Width',
// //       'Width Unit',
// //       'Thickness',
// //       'Thickness Unit',
// //       'Variant Grams',
// //       'URL',
// //       'Image Src',
// //       'Image Position',
// //       'Variant Price',
// //       'Page',
// //       'Count',
// //       'Updated',
// //     ];

// //     await withScreen(async (screen) => {
// //       let result: Array<Record<string, string | number>> = [];
// //       const auth = new JWT({
// //         email: process.env.SERVER_GOOGLE_EMAIL,
// //         key: process.env.SERVER_GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
// //         scopes: [
// //           'https://www.googleapis.com/auth/spreadsheets',
// //           'https://www.googleapis.com/auth/drive.file',
// //         ],
// //       });

// //       const doc = new GoogleSpreadsheet('1goPGjp9NmqNSP7jpjVZaiHdZ2xdOKIS4rZXzE20BDpY', auth);
// //       await doc.loadInfo();
// //       const [sheet] = doc.sheetsByIndex;

// //       const upload = async (value: Array<Record<string, string | number>>): Promise<void> =>
// //         runWithRetry(
// //           async () => {
// //             if (value) {
// //               const valueF = value.map((row) => ({ ...row, Updated: new Date().toLocaleString() }));
// //               await sheet.addRows(valueF);
// //               await sheet.saveUpdatedCells();
// //             }
// //           },
// //           { delay: 1000, retries: 10 },
// //         );
// //       let count = start + 1;

// //       try {
// //         await screen.open(
// //           `${link}?goToProdList=true${pageIndex > 0 ? `&offset=${pageIndex * PAGE_SIZE}` : ''}`,
// //         );
// //         const urls = await Promise.all(
// //           await screen
// //             .findAll({ key: 'data-selector', type: SELECTOR_TYPE.DATA, value: 'splp-prd-tl-img-2' })
// //             .then((handles) =>
// //               handles?.map((h) =>
// //                 h
// //                   .find({
// //                     key: 'data-clicktype',
// //                     type: SELECTOR_TYPE.DATA,
// //                     value: 'col_product-list_single_shop_the_collection',
// //                   })
// //                   .then((h) => h?.url()),
// //               ),
// //             ),
// //         );

// //         for (const urlF of start ? urls.slice(start) : urls) {
// //           if (maxItems && count > maxItems) {
// //             break;
// //           }
// //           // const url = urlF?.replace('https', 'http');
// //           const url = urlF;

// //           try {
// //             if (url?.includes('www.lowes.com')) {
// //               const itemQueue = new ConcurrentQueue();
// //               const row: Record<string, unknown> = {};
// //               COLUMNS.forEach((column) => (row[column] = ''));

// //               console.warn(url);
// //               await runWithRetry(async () => screen.open(url), { delay: 1000, retries: 3 });

// //               const accordions = await screen.findAll({ value: '.accordion-header' });
// //               for (const accordion of accordions) {
// //                 try {
// //                   await accordion.press();
// //                 } catch (e) {}
// //               }

// //               row.Extra = category;

// //               // category
// //               itemQueue.add(async () => {
// //                 let tags = [];
// //                 console.warn('category');
// //                 const categories = await screen
// //                   .find({ value: '.breadcrumb-desktop' })
// //                   .then((h) => h?.findAll({ value: 'li .link-label' }))
// //                   .then((handles) => handles?.map((h) => h?.text()));
// //                 for (const category of categories ?? []) {
// //                   const categoryF = await category;
// //                   categoryF && categoryF !== 'Back to Results' && tags.push(categoryF);
// //                 }
// //                 tags = uniq(tags);
// //                 row.Tags = tags ? tags.join(',') : '';
// //               });

// //               // brand
// //               itemQueue.add(async () => {
// //                 console.warn('brand');
// //                 row.Vendor =
// //                   (await screen
// //                     .find({ value: '.shop-brand .link-label' })
// //                     .then((h) => h?.text())) ?? '';
// //               });

// //               // title
// //               itemQueue.add(async () => {
// //                 console.warn('title');
// //                 row.Title =
// //                   (await screen
// //                     .find({ value: '.product-brand-description' })
// //                     .then((h) => h?.text())) ?? '';
// //                 row.Title && (row.Handle = slug(row.Title as string));
// //               });

// //               // description
// //               itemQueue.add(async () => {
// //                 console.warn('description');
// //                 row['Body (HTML)'] = await screen
// //                   .find({
// //                     key: 'data-testid',
// //                     type: SELECTOR_TYPE.DATA,
// //                     value: 'desktop-content',
// //                   })
// //                   .then((h) => h?.find({ value: '.sui-flex-col' }))
// //                   .then((h) => h?.find({ value: '.sui-flex-col' }))
// //                   .then((h) => h?.content());

// //                 row['Body (HTML)'] =
// //                   row['Body (HTML)'] ??
// //                   (await screen.find({ value: '.overviewWrapper' }).then((h) => h?.content()));
// //               });

// //               // price
// //               itemQueue.add(async () => {
// //                 // const priceContainer = await screen.find({ value: '.main-price' });
// //                 // if (priceContainer) {
// //                 //   const spans = await priceContainer.findAll({ value: 'span' });
// //                 //   const dollar = (await spans[0]?.text())?.replace('$', '');
// //                 //   const cent = (await spans[1]?.text())?.replace('.', '');
// //                 //   row['Cost per Item'] = toNumber(`${dollar ?? 0}.${cent ?? 0}`);
// //                 //   row['Cost per Item'] &&
// //                 //     (row['Variant Price'] = ((row['Cost per Item'] as number) * 1.075).toFixed(2));
// //                 // }

// //                 const price = await screen.find({ value: '.screen-reader' }).then((h) => h?.text());
// //                 if (price) {
// //                   const [dollar, cent] = price.replaceAll('$', '').trim().split('.');
// //                   row['Cost per Item'] = toNumber(`${dollar ?? 0}.${cent ?? 0}`);
// //                   row['Cost per Item'] &&
// //                     (row['Variant Price'] = ((row['Cost per Item'] as number) * 1.075).toFixed(2));
// //                 }
// //               });

// //               // dimensions
// //               itemQueue.add(async () => {
// //                 const getMeasurement = (v: string): [number, string] => {
// //                   const unit = (() => {
// //                     if (v.includes('ft')) {
// //                       return 'ft';
// //                     } else if (v.includes('in')) {
// //                       return 'in';
// //                     }
// //                     return '';
// //                   })();
// //                   return [toNumber(v.replaceAll('ft', '').replaceAll('in', '').trim()), unit];
// //                 };

// //                 console.warn('dimensions');
// //                 const v = await screen
// //                   .find(
// //                     { type: SELECTOR_TYPE.TEXT, value: 'Actual: ' },
// //
// //                   )
// //                   .then((h) => h?.text())
// //                   .then((h) =>
// //                     h
// //                       ?.replace('Actual:', '')
// //                       .replaceAll(' H ', '')
// //                       .replaceAll(' W ', '')
// //                       .replaceAll(' L ', '')
// //                       .replaceAll(' T ', '')
// //                       .replaceAll('-1/2', '.5')
// //                       .replaceAll('-5/16', '.3125')
// //                       .replaceAll('-', '')
// //                       .trim(),
// //                   )
// //                   .then((h) => h?.split(' x '))
// //                   .catch((_) => {});
// //                 if (v) {
// //                   if (v.length ?? 0 >= 1) {
// //                     const [measure, unit] = getMeasurement(v[0]);
// //                     row.Thcikness = measure;
// //                     row['Thcikness Unit'] = unit;
// //                   }
// //                   if (v.length ?? 0 >= 2) {
// //                     const [measure, unit] = getMeasurement(v[1]);
// //                     row.Width = measure;
// //                     row['Width Unit'] = unit;
// //                   }
// //                   if (v.length ?? 0 >= 3) {
// //                     const [measure, unit] = getMeasurement(v[2]);
// //                     row.Height = measure;
// //                     row['Height Unit'] = unit;
// //                   }
// //                 }

// //                 const v2 = await screen
// //                   .find(
// //                     { type: SELECTOR_TYPE.TEXT, value: 'Common Measurement (W x L): ' },
// //
// //                   )
// //                   .then((h) => h?.text())
// //                   .then((h) =>
// //                     h
// //                       ?.replace('Common Measurement (W x L):', '')
// //                       .replaceAll(' H ', '')
// //                       .replaceAll(' W ', '')
// //                       .replaceAll(' L ', '')
// //                       .replaceAll(' T ', '')
// //                       .replaceAll('-1/2', '.5')
// //                       .replaceAll('-5/16', '.3125')
// //                       .replaceAll('-', '')
// //                       .trim(),
// //                   )
// //                   .then((h) => h?.split(' x '))
// //                   .catch((_) => {});
// //                 if (v2) {
// //                   if (v2.length ?? 0 >= 1) {
// //                     const [measure, unit] = getMeasurement(v2[0]);
// //                     row.Thcikness = measure;
// //                     row['Thcikness Unit'] = unit;
// //                   }
// //                   if (v2.length ?? 0 >= 2) {
// //                     const [measure, unit] = getMeasurement(v2[1]);
// //                     row.Width = measure;
// //                     row['Width Unit'] = unit;
// //                   }
// //                 }

// //                 const v3 = await screen
// //                   .find(
// //                     { type: SELECTOR_TYPE.TEXT, value: 'Actual Size: ' },
// //
// //                   )
// //                   .then((h) => h?.text())
// //                   .then((h) =>
// //                     h
// //                       ?.replace('Actual Size:', '')
// //                       .replaceAll(' H ', '')
// //                       .replaceAll(' W ', '')
// //                       .replaceAll(' L ', '')
// //                       .replaceAll(' T ', '')
// //                       .replaceAll('-1/2', '.5')
// //                       .replaceAll('-5/16', '.3125')
// //                       .replaceAll('-', '')
// //                       .trim(),
// //                   )
// //                   .then((h) => h?.split(' x '))
// //                   .catch((_) => {});
// //                 if (v3) {
// //                   if (v3.length ?? 0 >= 1) {
// //                     const [measure, unit] = getMeasurement(v3[0]);
// //                     row.Thcikness = measure;
// //                     row['Thcikness Unit'] = unit;
// //                   }
// //                   if (v3.length ?? 0 >= 2) {
// //                     const [measure, unit] = getMeasurement(v3[1]);
// //                     row.Width = measure;
// //                     row['Width Unit'] = unit;
// //                   }
// //                 }
// //               });

// //               await itemQueue.run();

// //               // images
// //               console.warn('images');
// //               const thumbnails = await screen.findAll({
// //                 value: '.thumbnail-img',
// //               });
// //               let i = 1;
// //               for (const thumbnail of thumbnails) {
// //                 const src = await thumbnail.src();
// //                 console.warn(src);

// //                 if (src) {
// //                   row.URL = url;
// //                   row.Count = count + 1;
// //                   row.Page = pageIndex + 1;
// //                   const rowToAdd =
// //                     i > 1
// //                       ? { Count: row.Count, Extra: row.Extra, Handle: row.Handle, Page: row.Page }
// //                       : row;
// //                   rowToAdd['Image Src'] = src;
// //                   rowToAdd['Image Position'] = i;
// //                   result.push(rowToAdd as Record<string, string | number>);
// //                   i++;
// //                 }
// //               }
// //               info(`Adding item: ${url}`);

// //               if (result.length > 0) {
// //                 if (result.length > 0 && count % UPLOAD_SIZE === 0) {
// //                   await upload(result);
// //                   result = [];
// //                 }
// //                 count++;
// //               }
// //             }
// //           } catch (e) {
// //             console.warn(e);
// //             continue;
// //           }
// //         }
// //       } catch (e) {
// //         console.warn(e);
// //         return;
// //       }

// //       if (result.length > 0) {
// //         await upload(result);
// //         result = [];
// //       }

// //       await screen.close();
// //     });

// //     return {
// //       body: { message: 'success' },
// //       headers: { 'Access-Control-Allow-Origin': '*' },
// //       statusCode: HTTP_STATUS_CODE.SUCCESS,
// //     };
// //   },
// // });
