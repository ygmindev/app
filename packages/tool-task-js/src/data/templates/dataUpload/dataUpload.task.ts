import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type DataUploadParamsModel } from '@tool/task/data/templates/dataUpload/dataUpload.models';

const dataUpload: TaskParamsModel<DataUploadParamsModel> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'data-upload',

  task: [
    async ({ options }) => {
      console.warn(await loader.fetch());
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
