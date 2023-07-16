import _concurrently from 'concurrently';
import isString from 'lodash/isString';

import { setEnvironment } from '#lib-shared/environment/utils/setEnvironment/setEnvironment';
import { TASK_STATUS } from '#tool-task/core/core.constants';
import {
  type _ParallelModel,
  type _ParallelParamsModel,
} from '#tool-task/core/utils/parallel/_parallel.models';

export const _parallel = async (params: _ParallelParamsModel): Promise<_ParallelModel> => {
  const { result } = _concurrently(
    params.map((task) => {
      if (isString(task)) {
        return task;
      }
      const [command, options] = task;
      const { environment, overrides, root } = options ?? {};
      setEnvironment({ environment, overrides });
      return { command, cwd: root, env: process.env, name: command };
    }),
    { killOthers: ['failure', 'success'], raw: true, successCondition: 'all' },
  );
  try {
    await result;
    return { status: TASK_STATUS.SUCCESS };
  } catch (e) {
    return { error: e as Error, status: TASK_STATUS.ERROR };
  }
};
