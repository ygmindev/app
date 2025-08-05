import { Screen } from '@lib/shared/crawling/utils/Screen/Screen';
import { SELECTOR_TYPE } from '@lib/shared/crawling/utils/Screen/Screen.constants';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type DataUploadParamsModel } from '@tool/task/data/templates/dataUpload/dataUpload.models';

const dataUpload: TaskParamsModel<DataUploadParamsModel> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'data-upload',

  task: [
    async ({ options }) => {
      const screen = new Screen();
      await screen.open('https://derivativelogic.com/interest-rate-dashboard');
      const table = await screen.find({ type: SELECTOR_TYPE.ID, value: 'TableRows' });
      const header = await table?.find({ type: SELECTOR_TYPE.ID, value: 'TableHeaderRow' });
      const date = await header
        ?.findAll({
          type: SELECTOR_TYPE.CLASS,
          value: 'widgetTableCell',
        })
        .then((h) => h?.[1])
        .then((h) => h?.text());

      const sections = await table?.findAll({ type: SELECTOR_TYPE.CLASS, value: 'Section' });
      for (const section of sections ?? []) {
        const title = await section
          .find({ type: SELECTOR_TYPE.CLASS, value: 'sectionBreakRow' })
          .then((h) => h?.text());
        if (title === 'SOFR Swap Rates (Annual)') {
          const rows = await section?.findAll({ type: SELECTOR_TYPE.CLASS, value: 'TableRow' });
          for (const row of rows ?? []) {
            const tenor = await row
              .find({ type: SELECTOR_TYPE.CLASS, value: 'widgetTableCell' }, { index: 0 })
              .then((h) => h?.text());
            const value = await row
              .find({ type: SELECTOR_TYPE.CLASS, value: 'widgetTableCell' }, { index: 2 })
              .then((h) => h?.text());
            console.warn([tenor, value]);
          }
        }
      }

      await screen.close();
    },
  ],
};

export default dataUpload;

// import { initialize } from '@lib/backend/setup/utils/initialize/initialize';
// import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
// import { treasuryYieldLoader } from '@service/data/quant/utils/treasuryYieldLoader/treasuryYieldLoader';
// import { type TaskParamsModel } from '@tool/task/core/core.models';
// import { type DataUploadParamsModel } from '@tool/task/data/templates/dataUpload/dataUpload.models';

// const dataUpload: TaskParamsModel<DataUploadParamsModel> = {
//   environment: ENVIRONMENT.PRODUCTION,

//   name: 'data-upload',

//   task: [
//     async ({ options }) => {
//       await initialize();
//       console.warn(await treasuryYieldLoader.fetch());
//     },
//   ],
// };

// export default dataUpload;
