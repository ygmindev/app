import { Container } from '@lib/shared/core/utils/Container/Container';
import { DATABASE_TYPE } from '@lib/backend/database/database.constants';
import { Database } from '@lib/backend/database/utils/Database/Database';
import { fromStatic } from '@lib/backend/file/utils/fromStatic/fromStatic';
import { writeFile } from '@lib/backend/file/utils/writeFile/writeFile';
import { initialize } from '@lib/backend/setup/utils/initialize/initialize';
import { WEB_CONFIG } from '@lib/config/node/web/web.constants';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { CACHE_RESOURCES } from '@tool/task/asset/tasks/cacheDatabase/cacheDatabase.constants';
import {
  type CacheAssetModel,
  type CacheDatabaseParamsModel,
} from '@tool/task/asset/tasks/cacheDatabase/cacheDatabase.models';
import { type TaskParamsModel } from '@tool/task/core/core.models';
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';

const resources = Object.keys(CACHE_RESOURCES);

const cacheDatabase: TaskParamsModel<CacheDatabaseParamsModel> = {
  environment: ENVIRONMENT.DEVELOPMENT,

  name: 'cache-database',

  onFinish: ['database-kill'],

  options: () => [
    {
      defaultValue: resources,
      key: 'resources',
      options: resources,
      type: PROMPT_TYPE.MULTIPLE,
    },
  ],

  task: [
    async ({ options }) => {
      await initialize();
      const database = Container.get(Database, DATABASE_TYPE.MONGO);
      const tasks = options?.resources?.map(async (name) => {
        const { result } = await database.getRepository({ name }).getMany({
          filter: [],
          options: () => ({ take: CACHE_RESOURCES[name as keyof typeof CACHE_RESOURCES].count }),
        });
        if (result) {
          const value = { created: new Date(), data: result } satisfies CacheAssetModel;
          const filename = fromStatic(WEB_CONFIG.publicPath, 'resources', `${name}.json`);
          writeFile({ filename, value: JSON.stringify(value, null, '  ') });
        }
      });
      await Promise.all(filterNil(tasks));
    },
  ],
};

export default cacheDatabase;
