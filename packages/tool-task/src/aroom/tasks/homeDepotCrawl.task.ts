import { type TaskParamsModel } from '@tool/task/core/core.models';
import puppeteer from 'puppeteer-extra';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

puppeteer.use(StealthPlugin());

const TIMEOUT = 30000;

const crawl: TaskParamsModel<unknown> = {
  name: 'hdc',

  task: [
    async () => {
      const browser = await puppeteer.launch({
        defaultViewport: null,
        headless: true,
        ignoreHTTPSErrors: true,
      });

      const page = await browser.newPage();
      //   await page.goto('https://www.homedepot.com/b/Building-Materials/N-5yc1vZaqns', {
      //     timeout: TIMEOUT,
      //     waitUntil: 'networkidle0',
      //   });
      //   const result = [];
      //   const categories = await page.$$('.side-navigation__li');
      //   for (const category of categories) {
      //     const categoryLink = await category.$eval('a', (el) => el.href);
      //     const categoryTitle = await category.$eval('a', (el) => el.textContent);
      //     await page.goto(categoryLink, { timeout: TIMEOUT, waitUntil: 'networkidle0' });
      //     const subCategories = await page.$$('.side-navigation__li');
      //     for (const subCategory of subCategories) {
      //       console.warn(111);
      //       const subCategoryLink = await subCategory.$eval('a', (el) => el.href);
      //       console.warn(222);
      //       const subCategoryTitle = await subCategory.$eval('a', (el) => el.textContent);
      //       console.warn(333);
      //       await page.goto(subCategoryLink, { timeout: TIMEOUT, waitUntil: 'networkidle0' });
      //       console.warn(444);
      //       const productTiles = await page.$$('[data-testid="product-pod"]');
      //       console.warn(555);
      //       for (const productTile of productTiles) {
      //         console.warn(666);
      //         const imageSrc = await productTile
      //           .$('[data-testid="product-image__wrapper"]')
      //           .then((h) => h?.$eval('img', async (el) => el.src));
      //         console.warn(777);
      //       }
      //     }
      //   }
      const result = [];
      const url =
        'https://www.homedepot.com/b/Lumber-Composites/N-5yc1vZbqpg?catStyle=ShowProducts';
      await page.goto(url, { timeout: TIMEOUT, waitUntil: 'networkidle0' });
      const products = await page.$$('[data-testid="product-pod"]');
      for (const product of products) {
        const link = await product.$eval('a', (el) => el.href);
        console.warn(link);
        await page.goto(link, { timeout: TIMEOUT, waitUntil: 'networkidle0' });

        const images = await page.$$('.mediagallery__thumbnail');
        const imageSrcs = await Promise.all(
          images.map((image) => image.$eval('img', (el) => el.src)),
        );
        console.warn(imageSrcs);
      }
    },
  ],
};

export default crawl;
