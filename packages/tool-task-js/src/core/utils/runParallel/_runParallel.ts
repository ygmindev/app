import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { setEnvironment } from '@lib/shared/environment/utils/setEnvironment/setEnvironment';
import {
  type _RunParallelModel,
  type _RunParallelParamsModel,
} from '@tool/task/core/utils/runParallel/_runParallel.models';
import concurrently from 'concurrently';

export const _runParallel = async (
  ...[tasks, options, environment]: _RunParallelParamsModel
): Promise<_RunParallelModel> => {
  setEnvironment(environment);
  const { result } = concurrently(
    tasks.map((command, i) => ({
      command,
      cwd: options?.root ?? fromRoot(),
      env: process.env,
      name: command,
      raw: !options?.silent?.includes(i),
    })),
    {
      hide: options?.silent,
      killOthers: ['success', 'failure'],
      successCondition: options?.condition ?? 'all',
    },
  );
  await result;
};
