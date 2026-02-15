import { Environment } from '@lib/backend/environment/utils/Environment/Environment';
import { fileInfo } from '@lib/backend/file/utils/fileInfo/fileInfo';
import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import { getAppRoot } from '@lib/backend/file/utils/getAppRoot/getAppRoot';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { withDir } from '@lib/backend/file/utils/withDir/withDir';
import { taskConfig } from '@lib/config/task/task';
import { type ExecutionContextModel } from '@lib/model/orchestrator/ExecutionContext/ExecutionContext.models';
import { WORKFLOW_EXECUTION } from '@lib/model/orchestrator/Workflow/Workflow.constants';
import { WORKFLOW_STEP_TYPE } from '@lib/model/orchestrator/WorkflowStep/WorkflowStep.constants';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { Bootstrappable } from '@lib/shared/core/utils/Bootstrappable/Bootstrappable';
import { cleanObject } from '@lib/shared/core/utils/cleanObject/cleanObject.base';
import { mapSequence } from '@lib/shared/core/utils/mapSequence/mapSequence';
import { merge } from '@lib/shared/core/utils/merge/merge';
import { packageInfo } from '@lib/shared/core/utils/packageInfo/packageInfo';
import { reduceSequence } from '@lib/shared/core/utils/reduceSequence/reduceSequence';
import { logger } from '@lib/shared/logging/utils/Logger/Logger';
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
      const { execution, prompts, steps } = (
        (await import(`${dirname}/${main}`)) as Record<
          string,
          BuildWorkflowParamsModel<unknown, unknown>
        >
      )[main];
      const func = async (params: unknown, context?: ExecutionContextModel): Promise<unknown> => {
        let paramsF = params ?? {};
        const promptsF = prompts?.filter((v) => !(v.key in (paramsF as object)));
        promptsF?.length && (paramsF = { ...paramsF, ...(await prompt(promptsF)) });
        const executions = steps(paramsF, context).map((s) => async () => {
          const funcF =
            s.type === WORKFLOW_STEP_TYPE.WORKFLOW ? this._registry[s.name].func : tasks[s.name];
          const stepParams = cleanObject({ ...(paramsF ?? {}), ...(s.params ?? {}) });
          let stepContext = cleanObject({ ...(context ?? {}), ...(s.context ?? {}) });
          const pkg =
            stepContext?.root ?? (stepContext?.app ? await getAppRoot(stepContext.app) : undefined);
          const rootF = pkg ?? fromRoot();
          if (pkg) {
            stepContext = merge([stepContext, { overrrides: { PKG_NAME: fileInfo(rootF).main } }]);
          }
          return withDir(rootF, async () => {
            const environment = new Environment({
              app: stepContext?.app,
              environment: stepContext?.environment,
              overrrides: stepContext?.overrrides,
            });
            await environment.initialize();
            return funcF(stepParams, stepContext);
          });
        });
        return execution === WORKFLOW_EXECUTION.PARALLEL
          ? Promise.all(executions.map((v) => v()))
          : mapSequence(executions);
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
      logger.warn(`alias ${alias} (${name} vs. ${this._aliases[alias]}) already exists`);
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
    const { environment, queue, root, workers, ...rest } = args;
    const { name: appName } = packageInfo();
    const context: ExecutionContextModel = {
      app: args.app,
      environment,
      overrrides: { APP_NAME: appName },
      queue,
      root,
    };
    if (workers) {
      await Promise.all(new Array(toNumber(workers)).fill(func(rest, context)));
    } else {
      await func(rest, context);
    }
  };
}
