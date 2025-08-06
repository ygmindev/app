import { SELECTOR_TYPE } from '@lib/shared/crawling/utils/Screen/Screen.constants';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { TableCrawlDataLoader } from '@service/data/core/utils/TableCrawlDataLoader/TableCrawlDataLoader';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type DataUploadParamsModel } from '@tool/task/data/templates/dataUpload/dataUpload.models';

const dataUpload: TaskParamsModel<DataUploadParamsModel> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'data-upload',

  task: [
    async ({ options }) => {
      const loader = new TableCrawlDataLoader({
        tableSelector: async (screen) => {
          const tables = await screen.findAll({ type: SELECTOR_TYPE.CLASS, value: 'rates' });
          for (const table of tables) {
            const title = await table.find({ value: 'header' })?.then((h) => h?.text());
            if (title?.includes('SOFR swap rate (annual/annual)')) {
              return table;
            }
          }
          return null;
        },
        uri: 'https://www.chathamfinancial.com/technology/us-market-rates',
      });
      await loader.fetch();
    },
  ],
};

export default dataUpload;

// import { initialize } from '@lib/backend/setup/utils/initialize/initialize';
// import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
// import { treasuryRateLoader } from '@service/data/quant/utils/treasuryRateLoader/treasuryRateLoader';
// import { type TaskParamsModel } from '@tool/task/core/core.models';
// import { type DataUploadParamsModel } from '@tool/task/data/templates/dataUpload/dataUpload.models';

// const dataUpload: TaskParamsModel<DataUploadParamsModel> = {
//   environment: ENVIRONMENT.PRODUCTION,

//   name: 'data-upload',

//   task: [
//     async ({ options }) => {
//       await initialize();
//       console.warn(await treasuryRateLoader.fetch());
//     },
//   ],
// };

// export default dataUpload;
