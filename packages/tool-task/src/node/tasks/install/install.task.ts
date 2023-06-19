import { fromRoot } from '#lib-backend/file/utils/fromRoot/fromRoot';
import { filterNil } from '#lib-shared/core/utils/filterNil/filterNil';
import { sequence } from '#lib-shared/core/utils/sequence/sequence';
import { TASK_STATUS } from '#tool-task/core/core.constants';
import type { TaskParamsModel } from '#tool-task/core/core.models';
import { command } from '#tool-task/core/utils/command/command';
import { prompt } from '#tool-task/core/utils/prompt/prompt';
import type { PromptArgsModel } from '#tool-task/core/utils/prompt/prompt.models';
import type { InstallParamsModel } from '#tool-task/node/tasks/install/install.models';

const install: TaskParamsModel<InstallParamsModel> = {
  name: 'node-install',

  onAfter: ['node-post-install'],

  task: async ({ options }) => {
    const root = fromRoot();
    const prompts: Array<PromptArgsModel> = filterNil([
      options?.install ?? { isOptional: true, key: 'install' },
      options?.installDev ?? { isOptional: true, key: 'installDev' },
      options?.remove ?? { isOptional: true, key: 'remove' },
    ]) as Array<PromptArgsModel>;
    const response = prompts ? await prompt(prompts) : {};
    const install = options?.install || response.install;
    const installDev = options?.installDev || response.installDev;
    const remove = options?.remove || response.remove;
    await sequence(
      filterNil([
        install &&
          (async () => command(install === '*' ? 'yarn' : `yarn add ${install}`, { root })),

        installDev && (async () => command(`yarn add ${installDev} --dev`, { root })),

        remove && (async () => command(`yarn remove ${remove}`, { root })),
      ]),
    );
    return { status: TASK_STATUS.SUCCESS };
  },
};

export default install;
