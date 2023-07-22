import _concurrently from 'concurrently';

import {
  type _ParallelModel,
  type _ParallelParamsModel,
} from '#tool-task/core/utils/parallel/_parallel.models';

export const _parallel = async (
  ...[tasks, options]: _ParallelParamsModel
): Promise<_ParallelModel> => {
  const { result } = _concurrently(
    tasks.map((command) => ({ command, env: process.env, name: command })),
    {
      killOthers: ['success', 'failure'],
      raw: true,
      successCondition: options?.condition ?? 'all',
    },
  );
  await result;
};
