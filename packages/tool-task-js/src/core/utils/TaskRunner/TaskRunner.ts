import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { DuplicateError } from '@lib/shared/core/errors/DuplicateError/DuplicateError';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { isArray } from '@lib/shared/core/utils/isArray/isArray';
import { mapSequence } from '@lib/shared/core/utils/mapSequence/mapSequence';
import { partition } from '@lib/shared/core/utils/partition/partition';
import { stringify } from '@lib/shared/core/utils/stringify/stringify';
import { setEnvironment } from '@lib/shared/environment/utils/setEnvironment/setEnvironment';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
import {
  type TaskContextModel,
  type TaskModel,
  type TaskParamsModel,
} from '@tool/task/core/core.models';
import { execute } from '@tool/task/core/utils/execute/execute';
import { parseArgs } from '@tool/task/core/utils/parseArgs/parseArgs';
import { prompt } from '@tool/task/core/utils/prompt/prompt';
import { runParallel } from '@tool/task/core/utils/runParallel/runParallel';
import { PARALLEL_CONDITION } from '@tool/task/core/utils/runParallel/runParallel.constants';
import { _TaskRunner } from '@tool/task/core/utils/TaskRunner/_TaskRunner';
import { type TaskRunnerModel } from '@tool/task/core/utils/TaskRunner/TaskRunner.models';
import isFunction from 'lodash/isFunction';
import isString from 'lodash/isString';
import kebabCase from 'lodash/kebabCase';

@withContainer()
export class TaskRunner extends _TaskRunner implements TaskRunnerModel {
  protected _aliases: Record<string, string> = {};
  protected _pids: Set<number> = new Set();

  resolveTask = async <TType extends unknown>(
    value: TaskModel<TType>,
    context: TaskContextModel<TType>,
  ): Promise<void> => {
    if (value) {
      if (isArray(value)) {
        const tasks = filterNil(
          value[0].map((v) => {
            const task = isFunction(v) ? v(context) : v;
            const resolved = task ? this.getTask(task) : null;
            return resolved ?? task;
          }),
        );
        const [[promises, commands], [promiseIndices, commandIndices]] = partition(
          tasks,
          isFunction,
          true,
        );
        const promisesF = [
          ...(commands?.length ? [runParallel(commands, value[1], value[2])] : []),
          ...(promises.map(async (v) => (v as () => Promise<void>)()) ?? []),
        ];

        switch (value[1]?.condition) {
          case PARALLEL_CONDITION.FIRST: {
            await new Promise<void>((resolve, reject) => {
              let resolved = false;
              let rejections = 0;
              for (const p of promisesF) {
                p.then(() => {
                  if (!resolved) {
                    resolved = true;
                    resolve();
                  }
                }).catch(() => {
                  rejections++;
                  if (rejections === promises.length) {
                    reject(new Error());
                  }
                });
              }
            });
            break;
          }
          case PARALLEL_CONDITION.LAST: {
            await new Promise<void>((resolve, reject) => {
              let pending = promisesF.length;
              let lastSuccess = false;
              promisesF.forEach((p) => {
                p.then(
                  () => (lastSuccess = true),
                  () => (lastSuccess = false),
                ).finally(() => {
                  if (--pending === 0) {
                    lastSuccess ? resolve() : reject(new Error());
                  }
                });
              });
            });
            break;
          }
          default: {
            await Promise.all(promisesF);
            break;
          }
        }
      } else if (isFunction(value)) {
        let valueF = value(context);
        valueF = valueF && (isString(valueF) ? this.resolveTask(valueF, context) : valueF);
        await valueF;
      } else if (isString(value)) {
        const valueF = this.getTask(value);
        if (valueF) {
          await valueF();
        } else {
          await execute({
            command: value,
            onFinish: (pid) => this._pids.delete(pid),
            onStart: (pid) => this._pids.add(pid),
          });
        }
      }
    }
  };

  runTasks = async <TType extends unknown>(
    value: Array<TaskModel<TType>>,
    context: TaskContextModel<TType>,
  ): Promise<void> => {
    await mapSequence(value.map((v) => async () => this.resolveTask(v, context)));
  };

  runTask = async <TType extends unknown>({
    environment,
    name,
    onBefore,
    onFinish,
    options,
    overrides,
    root,
    target,
    task,
    variables,
  }: TaskParamsModel<TType>): Promise<void> => {
    const workingDir = fromWorking();
    target && process.chdir(fromPackages(target));
    const overridesF = overrides?.({ name, root, target });
    let optionsF = { ...(overridesF ?? {}), ...parseArgs() } as TType & object;
    if (options) {
      const optionsPrompts = await options({ name, overrides: overridesF, root, target });
      optionsF = {
        ...optionsF,
        ...((await prompt(optionsPrompts.filter(({ key }) => !(key in optionsF)))) as object),
      };
    }
    target && process.chdir(workingDir);
    const context: TaskContextModel<TType> = { name, options: optionsF, root, target };
    try {
      logger.info('running', name);
      onBefore && (await this.runTasks(onBefore, context));
      process.chdir(root ?? fromRoot());
      setEnvironment({ environment, variables });
      logger.info(
        stringify({
          environment,
          platform: process.env.ENV_PLATFORM,
          target,
        }),
      );
      await this.runTasks(task, context);
    } catch (e) {
      logger.error(name, (e as Error).stack);
    } finally {
      this._pids.forEach(process.kill);
      onFinish && (await this.runTasks(onFinish, context));
      logger.info('completed:', name);
    }
  };

  register = <TType extends unknown>({
    name,
    root,
    target,
    ...options
  }: TaskParamsModel<TType>): void => {
    const rootF = root ?? (target ? fromPackages(target) : fromRoot());
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
        this.runTask({ ...options, name: nameF, root: rootF, target: targetF }),
      );
    });
  };

  get aliases(): Record<string, string> {
    return this._aliases;
  }
}
