import _concurrently from 'concurrently';

import {
  type _ParallelModel,
  type _ParallelParamsModel,
} from '#tool-task/core/utils/parallel/_parallel.models';

export const _parallel = async (
  ...[tasks, options]: _ParallelParamsModel
): Promise<_ParallelModel> => {
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
