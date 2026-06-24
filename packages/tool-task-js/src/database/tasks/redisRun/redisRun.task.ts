import { buildTask } from '@tool/task/core/utils/buildTask/buildTask';
import { execute } from '@tool/task/core/utils/execute/execute';
import {
  type RedisRunModel,
  type RedisRunParamsModel,
} from '@tool/task/database/tasks/redisRun/redisRun.models';

export const redisRun = buildTask<RedisRunParamsModel, RedisRunModel>({
  task: async ({}) => {
    await execute({
      command:
        'docker start redis 2>/dev/null || docker run --name redis -p 6379:6379 -d redis:7-alpine --appendonly yes',
    });
  },
});
