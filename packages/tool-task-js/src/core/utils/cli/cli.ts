import { fileInfo } from '@lib/backend/file/utils/fileInfo/fileInfo';
import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { getAppRoot } from '@lib/backend/file/utils/getAppRoot/getAppRoot';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { withDir } from '@lib/backend/file/utils/withDir/withDir';
import { taskConfig } from '@lib/config/task/task';
import { type ExecutionContextModel } from '@lib/model/orchestrator/ExecutionContext/ExecutionContext.models';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { Bootstrappable } from '@lib/shared/core/utils/Bootstrappable/Bootstrappable';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject.base';
import { packageInfo } from '@lib/shared/core/utils/packageInfo/packageInfo';
import { reduceSequence } from '@lib/shared/core/utils/reduceSequence/reduceSequence';
import { type TaskModel } from '@tool/task/core/utils/buildTask/buildTask.models';
import { type CliModel, type CliRegistryModel } from '@tool/task/core/utils/Cli/Cli.models';
import { parseArgs } from '@tool/task/core/utils/parseArgs/parseArgs';
import { prompt } from '@tool/task/core/utils/prompt/prompt';
import { type BuildWorkflowParamsModel } from '@tool/task/orchestrator/utils/buildWorkflow/buildWorkflow.models';
import kebabCase from 'lodash/kebabCase';
import toNumber from 'lodash/toNumber';

export class Cli extends Bootstrappable implements CliModel {
  protected _aliases: Record<string, string> = {};

  protected _registry: Record<string, CliRegistryModel>;

  constructor() {
    super();
    this._registry = {};
  }

  get aliases(): Record<string, string> {
    return this._aliases;
  }

  get registry(): Record<string, CliRegistryModel> {
    return this._registry;
  }

  onInitialize = async (): Promise<void> => {
    const { taskExtension, workflowExtension } = taskConfig.params();

    const taskPathnames = fromGlobs([joinPaths(['src/**/*'], { extension: taskExtension })], {
      isAbsolute: true,
      root: fromPackages('tool-task-js'),
    });

    // register tasks
    const tasks = await reduceSequence(
      taskPathnames,
      async (result, v) => {
        const { main } = fileInfo(v);
        const func = (await import(v))[main];
        this.register(main, { func, pathname: v });
        return { ...result, [main]: func };
      },
      {} as Record<string, TaskModel>,
    );

    // register workflows
    const workflowPathnames = fromGlobs(
      [joinPaths(['src/**/*'], { extension: workflowExtension })],
      { isAbsolute: true, root: fromPackages('tool-task-js') },
    );
    for (const pathname of workflowPathnames) {
      const { dirname, main } = fileInfo(pathname);
      const { prompts, steps } = (
        (await import(`${dirname}/${main}`)) as Record<
          string,
          BuildWorkflowParamsModel<unknown, unknown>
        >
      )[main];
      const func = async (params: unknown, context?: ExecutionContextModel): Promise<unknown> => {
        let paramsF = params ?? {};
        const promptsF = prompts?.filter((v) => !(v.key in (paramsF as object)));
        promptsF?.length && (paramsF = { ...paramsF, ...(await prompt(promptsF)) });
        return steps(paramsF, context).map(async (s) =>
          tasks[s.name](
            cleanObject({ ...(paramsF ?? {}), ...(s.params ?? {}) }),
            cleanObject({ ...(context ?? {}), ...(s.context ?? {}) }),
          ),
        );
      };
      this.register(main, { func, pathname });
    }
  };

  register = (name: string, params: CliRegistryModel): void => {
    const alias = kebabCase(name)
      .split('-')
      .map((p) => p.charAt(0))
      .join('');
    if (this._aliases[alias]) {
      // throw new DuplicateError(`alias ${alias} (${name}) already exists`);
      console.warn(`alias ${alias} (${name}) already exists`);
    }
    this._registry[name] = params;
    this._aliases[alias] = name;
  };

  run = async (name?: string): Promise<void> => {
    let nameF =
      name ??
      (
        await prompt<{ workflow: string }>([
          { key: 'workflow', options: Object.keys(this.registry).map((v) => ({ id: v })) },
        ])
      ).workflow;

    nameF = this._aliases[nameF] ?? nameF;
    const v = this.registry[nameF] ?? this.registry[kebabCase(nameF)];
    if (!v) {
      throw new NotFoundError(nameF);
    }
    const args = parseArgs<ExecutionContextModel>();
    const { func } = v;
    const { app, environment, queue, root, workers, ...rest } = args;
    const rootF = root ?? (app ? await getAppRoot(app) : fromRoot());
    const { name: appName } = packageInfo();
    const context: ExecutionContextModel = {
      app,
      environment,
      overrrides: { APP_NAME: process.env.NODE_ENV ?? appName },
      queue,
      root: rootF,
    };

    await withDir(rootF, async () => {
      if (workers) {
        await Promise.all(new Array(toNumber(workers)).fill(func(rest, context)));
      } else {
        await func(rest, context);
      }
    });
  };
}
