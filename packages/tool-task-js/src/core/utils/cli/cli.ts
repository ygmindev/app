import { fileInfo } from '@lib/backend/file/utils/fileInfo/fileInfo';
import { fromGlobs } from '@lib/backend/file/utils/fromGlobs/fromGlobs';
import { fromPackages } from '@lib/backend/file/utils/fromPackages/fromPackages';
import { joinPaths } from '@lib/backend/file/utils/joinPaths/joinPaths';
import { config as taskConfig } from '@lib/config/task/task';
import { type AsyncCallableModel } from '@lib/shared/core/core.models';
import { DuplicateError } from '@lib/shared/core/errors/DuplicateError/DuplicateError';
import { NotFoundError } from '@lib/shared/core/errors/NotFoundError/NotFoundError';
import { importInterop } from '@lib/shared/core/utils/importInterop/importInterop';
import { type CliModel, type TaskRegistryModel } from '@tool/task/core/utils/Cli/Cli.models';
import { parseArgs } from '@tool/task/core/utils/parseArgs/parseArgs';
import { prompt } from '@tool/task/core/utils/prompt/prompt';
import { type PromptParamsModel } from '@tool/task/core/utils/prompt/prompt.models';
import kebabCase from 'lodash/kebabCase';
import toNumber from 'lodash/toNumber';

export class Cli implements CliModel {
  protected _aliases: Record<string, string> = {};
  protected _registry: Record<string, TaskRegistryModel>;

  constructor() {
    this._registry = {};
  }

  get aliases(): Record<string, string> {
    return this._aliases;
  }

  get registry(): Record<string, TaskRegistryModel> {
    return this._registry;
  }

  initialize = async (): Promise<void> => {
    const { taskExtension } = taskConfig.params();
    const pathnames = fromGlobs([joinPaths(['src/**/*'], { extension: taskExtension })], {
      isAbsolute: true,
      root: fromPackages('tool-task-js'),
    });
    for (const pathname of pathnames) {
      const { main } = fileInfo(pathname);
      const task = ((await importInterop(pathname)) as Record<string, AsyncCallableModel>)[main];
      const aliasF = kebabCase(main)
        .split('-')
        .map((p) => p.charAt(0))
        .join('');

      if (this._aliases[aliasF]) {
        throw new DuplicateError(`alias ${aliasF} (${main}) already exists`);
      }

      this.register(main, { pathname, task });
      this._aliases[aliasF] = main;
    }
  };

  register = (name: string, params: TaskRegistryModel): void => {
    this._registry[name] = params;
  };

  run = async (name?: string): Promise<void> => {
    let nameF =
      name ??
      (await prompt<{ task: string }>([{ key: 'task', options: Object.keys(this.registry) }])).task;
    nameF = this._aliases[nameF] ?? nameF;
    const v = this.registry[nameF];
    if (!v) {
      throw new NotFoundError(nameF);
    }
    const args = parseArgs();
    const { promptsExtension, taskExtension } = taskConfig.params();
    const { pathname, task } = v;
    const promptsPathname = pathname.replace(taskExtension, promptsExtension);

    if (promptsPathname) {
      try {
        const keys = Object.keys(args);
        const promptParams =
          await importInterop<() => Promise<PromptParamsModel<Record<string, string>>>>(
            promptsPathname,
          );
        await prompt<Record<string, string>>(
          (await promptParams())?.filter((v) => !keys.includes(v.key)),
        );
      } catch {}
    }

    const { workers, ...rest } = args;
    if (workers) {
      await Promise.all(new Array(toNumber(workers)).fill(task(rest)));
    } else {
      await task(rest);
    }
  };
}
