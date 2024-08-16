import { clearSeed } from '@lib/backend/database/utils/clearSeed/clearSeed';
import { seed } from '@lib/backend/database/utils/seed/seed';
import { cleanup } from '@lib/backend/setup/utils/cleanup/cleanup';
import { initialize } from '@lib/backend/setup/utils/initialize/initialize';
import databaseConfig from '@lib/config/database/database.mongo';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';

const seedDatabase: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.TEST,

  name: 'seed-database',

  task: [
    async () => {
      try {
        await initialize({ database: databaseConfig.params() });
        await clearSeed();
        await seed();
      } finally {
        await cleanup();
      }
    },
  ],
};

export default seedDatabase;
