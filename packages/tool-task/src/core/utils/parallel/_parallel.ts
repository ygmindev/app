import _concurrently from 'concurrently';

import { setEnvironment } from '#lib-shared/environment/utils/setEnvironment/setEnvironment';
import {
  type _ParallelModel,
  type _ParallelParamsModel,
} from '#tool-task/core/utils/parallel/_parallel.models';

export const _parallel = async (
  ...[tasks, options, environment]: _ParallelParamsModel
): Promise<_ParallelModel> => {
  setEnvironment(environment);
  const { result } = _concurrently(
    tasks.map((command, i) => ({
      command,
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
