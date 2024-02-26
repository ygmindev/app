import { setEnvironment } from '@lib/shared/environment/utils/setEnvironment/setEnvironment';
import {
  type _mapMapParallelModel,
  type _mapMapParallelParamsModel,
} from '@tool/task/core/utils/mapParallel/_mapParallel.models';
import _concurrently from 'concurrently';

export const _mapParallel = async (
  ...[tasks, options, environment]: _mapMapParallelParamsModel
): Promise<_mapMapParallelModel> => {
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
