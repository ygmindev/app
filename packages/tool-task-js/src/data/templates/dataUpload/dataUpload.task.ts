import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { Database } from '@lib/backend/database/utils/Database/Database';
import { Container } from '@lib/shared/core/utils/Container/Container';
import { ApiDataLoader } from '@service/data/core/utils/ApiDataLoader/ApiDataLoader';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { type DataUploadParamsModel } from '@tool/task/data/templates/dataUpload/dataUpload.models';

const dataUpload: TaskParamsModel<DataUploadParamsModel> = {
  name: 'data-upload',

  task: [
    async ({ options }) => {
      const database = Container.get(Database, DATABASE_TYPE.MONGO);
      await database.connect();
      new ApiDataLoader({
        params: {
          apiKey: 'spl4XZ9HTCTndp3nu5B4zzBM2u_gstCV',
          limit: 1,
          sort: 'date.desc',
        },
        transformer: async (x) => {
          console.warn(x);
          return [];
        },
        uri: 'https://api.polygon.io/fed/v1/treasury-yields',
      });
    },
  ],
};

export default dataUpload;
