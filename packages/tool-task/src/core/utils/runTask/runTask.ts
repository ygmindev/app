import isString from 'lodash/isString';

import { Container } from '#lib-backend/core/utils/Container/Container';
import { fromPackages } from '#lib-backend/file/utils/fromPackages/fromPackages';
import { fromRoot } from '#lib-backend/file/utils/fromRoot/fromRoot';
import { sequence } from '#lib-shared/core/utils/sequence/sequence';
import { setEnvironment } from '#lib-shared/environment/utils/setEnvironment/setEnvironment';
import { error, info, warn } from '#lib-shared/logging/utils/logger/logger';
import { TASK_STATUS } from '#tool-task/core/core.constants';
import { type TaskFunctionModel } from '#tool-task/core/core.models';
import {
  type RunTaskModel,
  type RunTaskParamsModel,
} from '#tool-task/core/utils/runTask/runTask.models';
import { TaskRunner } from '#tool-task/core/utils/TaskRunner/TaskRunner';

const getTask = (task: string | TaskFunctionModel): TaskFunctionModel =>
  isString(task) ? Container.get(TaskRunner).getTask(task) : task;

export const runTask = async <TType = undefined>({
  environment,
  name,
  onAfter,
  onBefore,
  options,
  overrides,
  root,
  target,
  task,
}: RunTaskParamsModel<TType>): Promise<RunTaskModel> => {
  const handleClose = async (): Promise<void> => {
    process.exit(0);
  };

  try {
    info('running', name);

    process.on('exit', () => void handleClose());

    const rootF = root ?? (target ? fromPackages(target) : fromRoot());
    process.chdir(rootF);
    setEnvironment({ environment, overrides });

    onBefore && (await sequence(onBefore.map(getTask)));

    const { error: errorF, message, status } = await task({ name, options, root: rootF, target });

    onAfter && (await sequence(onAfter.map(getTask)));

    switch (status) {
      case TASK_STATUS.SUCCESS: {
        info(name, message ?? 'completed');
        break;
      }
      case TASK_STATUS.WARNING: {
        warn(name, message ?? 'completed with warnings');
        break;
      }
      default: {
        error(name, errorF?.message ?? message ?? 'failed');
        break;
      }
    }
  } catch (e) {
    error(name, 'failed', (e as Error).stack);
    await handleClose();
  }

  // [
  //   'close',
  //   'exit',
  //   'SIGINT',
  //   'SIGKILL',
  //   'SIGTERM',
  //   'SIGUSR1',
  //   'SIGUSR2',
  //   'uncaughtException',
  // ].forEach((event) =>
  //   process.on(event, () => {
  //     handleAfter && void handleAfter().then(() => process.exit());
  //   }),
  // );

  return { status: TASK_STATUS.SUCCESS };
};
