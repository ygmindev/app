import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import {
  type _ExecuteParallelModel,
  type _ExecuteParallelParamsModel,
} from '@tool/task/core/tasks/executeParallel/_executeParallel.models';
import { PARALLEL_CONDITION } from '@tool/task/core/tasks/executeParallel/executeParallel.constants';
import concurrently from 'concurrently';

export const _executeParallel = async ({
  commands,
  condition = PARALLEL_CONDITION.ALL,
  root = fromWorking(),
}: _ExecuteParallelParamsModel): Promise<_ExecuteParallelModel> => {
  const { result } = concurrently(
    commands.map((command) => ({
      command,
      cwd: root ?? fromRoot(),
      env: process.env,
      name: command,
    })),
    {
      killOthersOn: ['failure'],
      successCondition: condition,
    },
  );
  await result;
};
