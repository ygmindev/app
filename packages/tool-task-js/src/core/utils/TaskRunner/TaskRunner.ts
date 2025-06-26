import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { DuplicateError } from '@lib/shared/core/errors/DuplicateError/DuplicateError';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { isArray } from '@lib/shared/core/utils/isArray/isArray';
import { isEmpty } from '@lib/shared/core/utils/isEmpty/isEmpty';
import { mapSequence } from '@lib/shared/core/utils/mapSequence/mapSequence';
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
        await runParallel(
          filterNil(value[0].map((v) => (isFunction(v) ? v(context) : v))),
          value[1],
          value[2],
        );
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
      onBefore && (await this.runTasks(onBefore, context));
      process.chdir(root ?? fromRoot());
      setEnvironment({ environment, variables });
      const environmentContext = stringify({
        environment: process.env.NODE_ENV,
        platform: process.env.ENV_PLATFORM,
        target,
      });
      logger.info(
        `running ${name}${environmentContext === '' ? '' : ` with context: ${isEmpty(environmentContext) ? 'none' : environmentContext}`}`,
      );
      await this.runTasks(task, context);
    } catch (e) {
      console.warn(e);
      logger.error(name, (e as Error).stack);
    } finally {
      this._pids.forEach((pid) => {
        try {
          process.kill(pid);
        } catch (e: unknown) {
          switch ((e as { code: string }).code) {
            case 'ESRCH':
            case 'EINVAL':
              break;
            default: {
              throw e;
            }
          }
        }
      });
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
