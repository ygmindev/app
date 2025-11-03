import { withContainer } from '@lib/backend/core/utils/withContainer/withContainer';
import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { fromWorking } from '@lib/backend/file/utils/fromWorking/fromWorking';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { config as taskConfig } from '@lib/config/task/task';
import { DuplicateError } from '@lib/shared/core/errors/DuplicateError/DuplicateError';
import { filterNil } from '@lib/shared/core/utils/filterNil/filterNil';
import { importInterop } from '@lib/shared/core/utils/importInterop/importInterop';
import { isArray } from '@lib/shared/core/utils/isArray/isArray';
import { isEmpty } from '@lib/shared/core/utils/isEmpty/isEmpty';
import { mapSequence } from '@lib/shared/core/utils/mapSequence/mapSequence';
import { reduceSequence } from '@lib/shared/core/utils/reduceSequence/reduceSequence';
import { stringify } from '@lib/shared/core/utils/stringify/stringify';
import { ENVIRONMENT } from '@lib/shared/environment/environment.constants';
import { EnvironmentOverrideParamsModel } from '@lib/shared/environment/environment.models';
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
import { PROMPT_TYPE } from '@tool/task/core/utils/prompt/prompt.constants';
import { runParallel } from '@tool/task/core/utils/runParallel/runParallel';
import { _TaskRunner } from '@tool/task/core/utils/TaskRunner/_TaskRunner';
import { type TaskRunnerModel } from '@tool/task/core/utils/TaskRunner/TaskRunner.models';
import { existsSync } from 'fs';
import isFunction from 'lodash/isFunction';
import isString from 'lodash/isString';
import kebabCase from 'lodash/kebabCase';
import reduce from 'lodash/reduce';

@withContainer()
export class TaskRunner extends _TaskRunner implements TaskRunnerModel {
  protected _aliases: Record<string, string> = {};
  protected _pids: Set<number> = new Set();
  protected _tasks: Record<string, TaskParamsModel<unknown>> = {};

  get tasks(): Record<string, TaskParamsModel<unknown>> {
    return this._tasks;
  }

  initialize = async (): Promise<void> => {
    const { configFilename, packageDirs, taskExtension } = taskConfig.params();
    let tasks = await reduceSequence<Array<string>, Array<TaskParamsModel<unknown>>>(
      packageDirs,
      async (result, target) => {
        let resultF = result;

        // Package tasks
        const path = fromPackages(target, configFilename);
        if (existsSync(path)) {
          const tasks = await importInterop<Array<TaskParamsModel<unknown>>>(path);
          resultF = [
            ...resultF,
            ...tasks.map((task) => ({ ...task, root: fromPackages(target), target })),
          ];
        }

        return resultF;
      },
      [],
    );

    // Task files
    tasks = filterNil([
      ...tasks,

      ...(await mapSequence(
        fromGlobs([joinPaths(['*/src/**/*'], { extension: taskExtension })], {
          isAbsolute: true,
          root: fromPackages(),
        }).map((path) => async () => importInterop<TaskParamsModel<unknown>>(path)),
      )),

      // All tasks
      {
        name: 'default',

        task: [
          async () => {
            const { name } = await prompt<{ name: string }>([
              {
                key: 'name',
                options: [
                  ...reduce(
                    this.aliases,
                    (result, v, k) => [...result, { id: k, label: `${k} (${v})` }],
                    [] as Array<{ id: string; label?: string }>,
                  ),
                  ...Object.keys(this.registry),
                ],
                type: PROMPT_TYPE.LIST,
              },
            ]);
            return this.getTask(name)?.();
          },
        ],
      },
    ]);

    tasks.forEach(this.register);
  };

  register = <TType extends unknown>({
    alias,
    name,
    root,
    target,
    ...options
  }: TaskParamsModel<TType>): void => {
    const rootF = root ?? (target ? fromPackages(target) : fromRoot());
    const targetF = target && kebabCase(target);
    const nameF = filterNil([targetF, kebabCase(name)]).join('-');
    const aliasF =
      alias ??
      kebabCase(nameF)
        .split('-')
        .map((p) => p.charAt(0))
        .join('');

    if (this._aliases[aliasF]) {
      throw new DuplicateError(`alias ${aliasF} (${nameF}) exists`);
    }

    this._aliases[aliasF] = nameF;

    [nameF, aliasF].forEach((value) => {
      this.registerTask(value, async () =>
        this.runTask({ ...options, name: nameF, root: rootF, target: targetF }),
      );
    });

    this._tasks[nameF] = {
      ...options,
      alias: aliasF,
      name: nameF,
      root: rootF,
    } as TaskParamsModel<unknown>;
  };

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
        if (isArray(valueF)) {
          const [command, options] = valueF;
          await execute({
            command,
            ...options,
            onFinish: (pid) => this._pids.delete(pid),
            onStart: (pid) => this._pids.add(pid),
          });
        } else {
          valueF = valueF && (isString(valueF) ? this.resolveTask(valueF, context) : valueF);
          await valueF;
        }
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
      let optionsPrompts = await options({ name, overrides: overridesF, root, target });
      optionsPrompts = optionsPrompts.map((v) =>
        v.key === 'environment'
          ? { ...v, defaultValue: environment, options: Object.values(ENVIRONMENT) }
          : v,
      );
      optionsF = {
        ...optionsF,
        ...(await prompt<TType & object>(optionsPrompts?.filter(({ key }) => !(key in optionsF)))),
      };
    }
    target && process.chdir(workingDir);
    const context: TaskContextModel<TType> = { name, options: optionsF, root, target };
    try {
      onBefore && (await this.runTasks(onBefore, context));
      process.chdir(root ?? fromRoot());
      const environmentF = (optionsF as EnvironmentOverrideParamsModel).environment ?? environment;
      setEnvironment({ environment: environmentF, variables });
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

  runTasks = async <TType extends unknown>(
    value: Array<TaskModel<TType>>,
    context: TaskContextModel<TType>,
  ): Promise<void> => {
    await mapSequence(value.map((v) => async () => this.resolveTask(v, context)));
  };

  get aliases(): Record<string, string> {
    return this._aliases;
  }
}
