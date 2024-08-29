import { HttpImplementation } from '@lib/backend/http/utils/HttpImplementation/HttpImplementation';
import { sleep } from '@lib/shared/core/utils/sleep/sleep';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import range from 'lodash/range';

const CATEGORIES: Array<{
  category: string;
  link: string;
  maxItems?: number;
}> = [
  {
    category: 'Building Supplies',
    link: 'https://www.lowes.com/pl/Building-supplies/4294934297',
    maxItems: 100,
  },
];

const crawl: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'lowes-crawl',

  task: [
    async () => {
      const BATCH_SIZE = 5;
      const PAGE_SIZE = 24;

      const http = new HttpImplementation();
      for (const row of CATEGORIES) {
        const { category, link, maxItems } = row;
        const maxPages = maxItems ? Math.ceil(maxItems / PAGE_SIZE) : undefined;
        for (const pageIndex of range(4, maxPages ?? 15)) {
          for (const start of range(0, Math.ceil(PAGE_SIZE / BATCH_SIZE))) {
            console.warn(`@@@ ${category} ${pageIndex} ${start}: ${link}`);
            try {
              void http
                .get({
                  params: {
                    category,
                    link: `${link}?goToProdList=true`,
                    maxItems,
                    pageIndex,
                    start: start * BATCH_SIZE,
                  },
                  url: 'https://zxe9mbv4ve.execute-api.us-east-1.amazonaws.com/api/crawl',
                  // url: 'https://localhost:5001/api/crawl',
                })
                .catch((e) => {
                  console.warn(e);
                });
              await sleep(5000);
            } catch (e) {
              console.warn(e);
            }
          }
        }
      }
    },
  ],
};

export default crawl;
