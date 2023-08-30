import { Container } from '#lib-backend/core/utils/Container/Container';
import { DATABASE_TYPE } from '#lib-backend/database/database.constants';
import { Database } from '#lib-backend/database/utils/Database/Database';
import { fromStatic } from '#lib-backend/file/utils/fromStatic/fromStatic';
import { writeFile } from '#lib-backend/file/utils/writeFile/writeFile';
import { WEB_CONFIG } from '#lib-config/platform/web/web.constants';
import { filterNil } from '#lib-shared/core/utils/filterNil/filterNil';
import { CACHE_RESOURCES } from '#tool-task/asset/tasks/cacheDatabase/cacheDatabase.constants';
import {
  type CacheAssetModel,
  type CacheDatabaseParamsModel,
} from '#tool-task/asset/tasks/cacheDatabase/cacheDatabase.models';
import { type TaskParamsModel } from '#tool-task/core/core.models';
import { PROMPT_TYPE } from '#tool-task/core/utils/prompt/prompt.constants';

const resources = Object.keys(CACHE_RESOURCES);

const cacheDatabase: TaskParamsModel<CacheDatabaseParamsModel> = {
  name: 'cache-database',

  onBefore: ['database-start'],

  onFinish: ['database-kill'],

  options: [
    {
      defaultValue: resources,
      key: 'resources',
      options: resources,
      type: PROMPT_TYPE.MULTIPLE,
    },
  ],

  task: [
    async ({ options }) => {
      const database = Container.get(Database, DATABASE_TYPE.MONGO);
      const tasks = options?.resources?.map(async (name) => {
        const { result } = await database.getRepository({ name }).getMany({
          filter: [],
          options: { take: CACHE_RESOURCES[name as keyof typeof CACHE_RESOURCES].count },
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
