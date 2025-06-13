import { clearSeed } from '@lib/backend/database/utils/clearSeed/clearSeed';
import { seed } from '@lib/backend/database/utils/seed/seed';
import { initialize } from '@lib/backend/setup/utils/initialize/initialize';
import databaseConfig from '@lib/config/database/database.mongo';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { type TaskParamsModel } from '@tool/task/core/core.models';

const seedDatabase: TaskParamsModel<unknown> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'seed-database',

  task: [
    async () => {
      let cleanUp: (() => Promise<void>) | undefined;
      try {
        ({ cleanUp } = await initialize({ database: databaseConfig.params() }));
        await clearSeed();
        await seed();
      } finally {
        await cleanUp?.();
      }
    },
  ],
};

export default seedDatabase;
