import { setEnvironment } from '@lib/shared/environment/utils/setEnvironment/setEnvironment';
import {
  type _MapParallelModel,
  type _MapParallelParamsModel,
} from '@tool/task/core/utils/mapParallel/_mapParallel.models';
import _concurrently from 'concurrently';

export const _mapParallel = async (
  ...[tasks, options, environment]: _MapParallelParamsModel
): Promise<_MapParallelModel> => {
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
