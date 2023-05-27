import { fromRoot } from '@lib/backend/file/utils/fromRoot/fromRoot';
import type { CallablePromiseModel } from '@lib/shared/core/core.models';
import { sequence } from '@lib/shared/core/utils/sequence/sequence';
import { TASK_STATUS } from '@tool/task/core/core.constants';
import type { TaskParamsModel, TaskResultModel } from '@tool/task/core/core.models';
import { command } from '@tool/task/core/utils/command/command';
import { prompt } from '@tool/task/core/utils/prompt/prompt';
import type { PromptParamsModel } from '@tool/task/core/utils/prompt/prompt.models';
import type { InstallParamsModel } from '@tool/task/node/tasks/install/install.models';

const install: TaskParamsModel<InstallParamsModel> = {
  name: 'node-install',

  onAfter: ['node-post-install'],

  task: async ({ options }) => {
    const _root = fromRoot();
    const _prompts = [
      options?.install ?? { isOptional: true, key: 'install' },
      options?.installDev ?? { isOptional: true, key: 'installDev' },
      options?.remove ?? { isOptional: true, key: 'remove' },
    ].filter(Boolean) as Array<PromptParamsModel<Record<string, string>>>;
    const response = _prompts ? await prompt(_prompts) : {};
    const _install = options?.install || response.install;
    const _installDev = options?.installDev || response.installDev;
    const _remove = options?.remove || response.remove;
    await sequence(
      [
        _install &&
          (async () => command(_install === '*' ? 'yarn' : `yarn add ${_install}`, { root: _root })),

        _installDev && (async () => command(`yarn add ${_installDev} --dev`, { root: _root })),

        _remove && (async () => command(`yarn remove ${_remove}`, { root: _root })),
      ].filter(Boolean) as Array<CallablePromiseModel<TaskResultModel>>,
    );
    return { status: TASK_STATUS.SUCCESS };
  },
};

export default install;
