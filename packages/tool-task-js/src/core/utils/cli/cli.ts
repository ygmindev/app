import { fileInfo } from '@lib/backend/file/utils/fileInfo/fileInfo';
import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { taskConfig } from '@lib/config/task/task';
import { type ExecutionContextModel } from '@lib/model/orchestrator/ExecutionContext/ExecutionContext.models';
import { DuplicateError } from '@lib/shared/core/errors/DuplicateError/DuplicateError';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { Bootstrappable } from '@lib/shared/core/utils/Bootstrappable/Bootstrappable';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject.base';
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
    const tasks = await reduceSequence(
      taskPathnames,
      async (result, v) => {
        const { main } = fileInfo(v);
        return { ...result, [main]: (await import(v))[main] };
      },
      {} as Record<string, TaskModel>,
    );
    const workflowPathnames = fromGlobs(
      [joinPaths(['src/**/*'], { extension: workflowExtension })],
      {
        isAbsolute: true,
        root: fromPackages('tool-task-js'),
      },
    );

    for (const pathname of workflowPathnames) {
      const { dirname, main } = fileInfo(pathname);
      const { prompts, steps } = (
        (await import(`${dirname}/${main}`)) as Record<
          string,
          BuildWorkflowParamsModel<unknown, unknown>
        >
      )[main];
      const aliasF = kebabCase(main)
        .split('-')
        .map((p) => p.charAt(0))
        .join('');
      if (this._aliases[aliasF]) {
        throw new DuplicateError(`alias ${aliasF} (${main}) already exists`);
      }
      const workflow = async (
        params: unknown,
        context?: ExecutionContextModel,
      ): Promise<unknown> => {
        let paramsF = params ?? {};
        const promptsF = prompts?.filter((v) => !(v.key in (paramsF as object)) && !v.isOptional);
        promptsF?.length && (paramsF = { ...paramsF, ...(await prompt(promptsF)) });
        return steps(params, context).map(async (s) =>
          tasks[s.name](
            cleanObject({ ...(paramsF ?? {}), ...(s.params ?? {}) }),
            cleanObject({ ...(context ?? {}), ...(s.context ?? {}) }),
          ),
        );
      };

      this.register(main, { pathname, workflow });
      this._aliases[aliasF] = main;
    }
  };

  register = (name: string, params: CliRegistryModel): void => {
    this._registry[name] = params;
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
    const { workflow } = v;
    const { app, environment, queue, workers, ...rest } = args;
    const context: ExecutionContextModel = { app, environment, queue };
    if (workers) {
      await Promise.all(new Array(toNumber(workers)).fill(workflow(rest, context)));
    } else {
      await workflow(rest, context);
    }
  };
}
