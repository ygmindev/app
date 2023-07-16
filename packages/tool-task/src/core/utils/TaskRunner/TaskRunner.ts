import { type ChildProcess, spawn } from 'child_process';
import isFunction from 'lodash/isFunction';
import isString from 'lodash/isString';
import kebabCase from 'lodash/kebabCase';
import reduce from 'lodash/reduce';

import { withContainer } from '#lib-backend/core/utils/withContainer/withContainer';
import { fromPackages } from '#lib-backend/file/utils/fromPackages/fromPackages';
import { fromRoot } from '#lib-backend/file/utils/fromRoot/fromRoot';
import { DuplicateError } from '#lib-shared/core/errors/DuplicateError/DuplicateError';
import { filterNil } from '#lib-shared/core/utils/filterNil/filterNil';
import { sequence } from '#lib-shared/core/utils/sequence/sequence';
import { setEnvironment } from '#lib-shared/environment/utils/setEnvironment/setEnvironment';
import { error, info, warn } from '#lib-shared/logging/utils/logger/logger';
import { TASK_STATUS } from '#tool-task/core/core.constants';
import {
  type TaskFunctionModel,
  type TaskParamsModel,
  type TaskResultModel,
} from '#tool-task/core/core.models';
import { _TaskRunner } from '#tool-task/core/utils/TaskRunner/_TaskRunner';
import { type TaskRunnerModel } from '#tool-task/core/utils/TaskRunner/TaskRunner.models';

@withContainer()
export class TaskRunner extends _TaskRunner implements TaskRunnerModel {
  protected _aliases: Record<string, string> = {};
  protected _pids: Set<number> = new Set();

  handleProcess = (p: ChildProcess | NodeJS.Process): Promise<TaskResultModel> =>
    new Promise((resolve, reject) => {
      const pidF = p.pid;
      pidF && this._pids.add(pidF);
      const handleFinish = (): void => {
        pidF && this._pids.delete(pidF);
      };
      const handleSuccess = (): void => {
        handleFinish();
        resolve({ status: TASK_STATUS.SUCCESS });
      };
      const handleError = (message: string): void => {
        handleFinish();
        reject({ message, status: TASK_STATUS.ERROR });
      };
      p.once('SIGTERM', handleSuccess);
      p.once('SIGINT', handleSuccess);
      p.once('uncaughtException', handleError);
      p.once('unhandledRejection', handleError);
    });

  resolveTask = async (
    task: string | TaskResultModel | TaskFunctionModel,
  ): Promise<TaskResultModel> => {
    if (isString(task)) {
      const taskF =
        this.getTask(task) ??
        (async () => {
          const cp = spawn(task, { env: process.env, shell: true });
          return this.handleProcess(cp);
        });
      return taskF();
    }
    return isFunction(task) ? task() : task;
  };

  runTask = async <TType = undefined>({
    environment,
    name,
    onAfter,
    onBefore,
    options,
    overrides,
    root,
    target,
    task,
  }: TaskParamsModel<TType>): Promise<void> => {
    const handleClose = async (): Promise<void> => {
      this._pids.forEach(process.kill);
      process.exit(0);
    };

    try {
      info('running', name);

      process.on('exit', () => void handleClose());

      const rootF = root ?? (target ? fromPackages(target) : fromRoot());
      process.chdir(rootF);
      setEnvironment({ environment, overrides });

      onBefore && (await sequence(onBefore.map((value) => async () => this.resolveTask(value))));

      const taskF = await task({ name, options, root: rootF, target });
      const { error: errorF, message, status } = await this.resolveTask(taskF);

      onAfter && (await sequence(onAfter.map((value) => async () => this.resolveTask(value))));

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
      error(name, (e as Error).stack);
      await handleClose();
    }
  };

  register = <TType = undefined>({ name, target, ...params }: TaskParamsModel<TType>): void => {
    const targetF = target && kebabCase(target);
    const nameF = filterNil([targetF, kebabCase(name)]).join('-');
    const alias = kebabCase(nameF)
      .split('-')
      .map((p) => p.charAt(0))
      .join('');

    if (this._aliases[alias]) {
      throw new DuplicateError(`alias ${alias} (${nameF}) exists`);
    }

    this._aliases[alias] = nameF;

    [nameF, alias].forEach((value) => {
      this.registerTask(value, async () =>
        this.runTask({ ...params, name: nameF, target: targetF }),
      );
    });
  };

  get registry(): Record<string, TaskFunctionModel> {
    return reduce(
      super.registry,
      (result, v, k) => (k === 'default' ? result : { ...result, [k]: v }),
      {},
    );
  }

  get aliases(): Record<string, string> {
    return this._aliases;
  }
}
