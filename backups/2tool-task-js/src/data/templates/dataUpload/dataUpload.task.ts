import { initialize } from '@lib/backend/setup/utils/initialize/initialize';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { sofrFutureLoader } from '@service/job/quant/loaders/sofrFutureLoader/sofrFutureLoader';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type DataUploadParamsModel } from '@tool/task/data/templates/dataUpload/dataUpload.models';

const dataUpload: TaskParamsModel<DataUploadParamsModel> = {
  environment: ENVIRONMENT.PRODUCTION,

  name: 'data-upload',

  task: [
    async () => {
      await initialize();
      // await treasuryRateLoader.upload();
      console.warn(await sofrFutureLoader.fetch());
    },
  ],
};

export default dataUpload;
