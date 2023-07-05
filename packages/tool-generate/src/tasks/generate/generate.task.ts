import { children } from '#lib-backend/file/utils/children/children';
import { fromPackages } from '#lib-backend/file/utils/fromPackages/fromPackages';
import { config } from '#lib-config/core/generate/generate';
import { type GenerateConfigModel } from '#lib-config/core/generate/generate.models';
import { merge } from '#lib-shared/core/utils/merge/merge';
import { type GenerateParamsModel } from '#tool-generate/tasks/generate/generate.models';
import { boilerplate } from '#tool-generate/utils/boilerplate/boilerplate';
import { TASK_STATUS } from '#tool-task/core/core.constants';
import { type TaskParamsModel } from '#tool-task/core/core.models';
import { prompt } from '#tool-task/core/utils/prompt/prompt';
import { PROMPT_TYPE } from '#tool-task/core/utils/prompt/prompt.constants';

const generate: TaskParamsModel<GenerateParamsModel> = {
  name: 'generate',

  task: async () => {
    const templatesDir = fromPackages('tool-generate/templates');
    const { template } = await prompt([
      {
        key: 'template',
        options: children(templatesDir, { isDirectory: true }).map(({ name }) => name),
        type: PROMPT_TYPE.LIST,
      },
    ]);
    const { onSuccess, output, prepare } = (config as GenerateConfigModel)[template] || {};
    const params = merge([{ onSuccess, output }, prepare ? await prepare() : {}]);
    await boilerplate({ ...params, template });

    return { status: TASK_STATUS.SUCCESS };
  },
};

export default generate;
